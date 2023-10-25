import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router : Router) {
  }

  AdminPageBtnClick(){
    this.router.navigate(['/admin']);
  }
  HomePageBtnClick(){
    this.router.navigate(['/']);
  }
  logInBtnClick(){
    this.router.navigate(['/login']);
  }
  logoutBtnClick(){
    this.router.navigate(['/logout']);
  }

}
