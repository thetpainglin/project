import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private fb : FormBuilder,
              private authService:AuthService,
              private router: Router) { }

  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['',
      Validators.required,],
  });

  ngOnInit(): void {
    console.log("isAuthenticated ",this.authService.isAuthenticated());
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['/']);
    }
  }
  onSubmit()
  {
    let user:any = this.loginForm.value;
    this.authService.login(user.username,user.password).subscribe(response=>{
      this.loginOk(response);
    },error => {
      this.loginError(error);
    });


  }

  private loginError(error:any) {
    console.log("Error ", error);
    Swal.fire(
      'Invalid login!',
      'Invalid username or password',
      'warning'
    )
    this.loginForm.reset();
  }

  private loginOk(response:any) {
    console.log("Response ", response);
    console.log("token ", response.token);
    localStorage.setItem("token", response.token);
    this.authService.setAuthentication(response.token);
    this.router.navigate(['/admin']);
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }
}
