import { Component } from '@angular/core';
import {faBagShopping,faShoppingBag}  from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  faMoneyCheck = faShoppingBag;
  constructor(private router : Router) {
    console.log("success component calling...")
  }
  shoppingAgainBtn(){
    this.router.navigate(['/']);
  }
}
