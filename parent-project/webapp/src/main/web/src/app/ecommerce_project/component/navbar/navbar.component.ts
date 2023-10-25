import { Component } from '@angular/core';
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {CardService} from "../../service/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  shop = faShoppingBag;

  cardClose :boolean = false;
  cartItemLength : number = 0;
  constructor(private cardService : CardService,
              private router : Router) {
    
    this.cardService.cards.subscribe(len=> this.cartItemLength = len.length);

    this.cardClose = this.cardService.OpenCloseCart;

  }
  AdminPageBtnClick(){
    this.router.navigate(['/admin']);
  }

  bagClick(){
    this.cardClose = true;
  }
  CloseCardBtnClick(data:boolean){
    this.cardClose = data;
  }

}
