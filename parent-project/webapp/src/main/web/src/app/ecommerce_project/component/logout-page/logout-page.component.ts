import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent {
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout()
  {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      /*text: 'You will not be able to recover this imaginary file!',*/
      /* icon: 'warning',*/
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();

      }
    });
  }
}
