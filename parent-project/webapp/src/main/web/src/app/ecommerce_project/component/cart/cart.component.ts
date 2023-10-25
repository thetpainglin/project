import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductService} from "../../service/product.service";

import {faShoppingBag,faDeleteLeft,faSquareMinus, faPlusSquare,faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import {faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
import {CardService} from "../../service/card.service";
import {Product} from "../../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems : Array<Product> = [];
  closedCard : boolean = false;
  quantity : number =0;

  buyBtnDisable : boolean = false;

  minus = faSquareMinus;
  plus = faPlusSquare;
  deleteLeft = faDeleteLeft;
  left = faArrowAltCircleLeft;

  totalPrice : number = 0;

  sumTotal : number = 0;

  @Output() cardEmitter = new EventEmitter<boolean>();

  constructor(private cardService : CardService,
              private router : Router) {
    this.cardService.getAllCard().flatMap(item=> {
      console.log("card items => ",item);
      return this.cartItems.push(item)
    });
    if(this.cartItems.length >=1){
      this.buyBtnDisable = true;
    }

  }
  ngOnInit(){
    this.sumTotalPrice();
  }


  BtnClickCard(){
    this.cardEmitter.emit(this.closedCard);
  }

  incrementQuantity(id:string){

    this.totalPrice = 0;
    this.sumTotal = 0;

    this.cartItems.map(data=> data.id == id ?  this.quantity = data.quantity : data);
    console.log("card items => ",this.cartItems);

    if(this.quantity  >= 10){
      this.quantity = 10;

      this.cartItems.flatMap(data=> data.id == id ? data.quantity = this.quantity : data);
    }
    else{
      this.quantity++;

      this.cartItems.flatMap(data=> data.id == id ? data.quantity = this.quantity : data);
    }
    this.sumTotalPrice();

  }

  decrementQuantity(id:string){
    this.totalPrice = 0;
    this.sumTotal = 0;
    this.cartItems.map(data=> data.id == id ?  this.quantity = data.quantity : data);

    console.log("decrement for origin state quantity => ",this.quantity);
    if(this.quantity  <= 1){
      this.quantity = 1;

      this.cartItems.map(data=> data.id == id ? data.quantity = this.quantity : data);
    }
    else{
      this.quantity--;

      this.cartItems.map(data=> data.id == id ? data.quantity = this.quantity : data);
    }
    this.sumTotalPrice();

  }

  removeItemFromCard(id:string){
    this.totalPrice = 0;
    this.sumTotal = 0;
    this.cartItems = this.cartItems.filter(items => items.id !== id);
    this.cardService.RemoveItemFromCard(id);
    this.sumTotalPrice();
  }
  sumTotalPrice(){
    this.cartItems.map(item=> {
      console.log("total quantity => ",this.sumTotal);
      this.sumTotal += item.quantity * item.price;
      return this.sumTotal;
    })
  }
  shopping(){
    this.router.navigate(['/'])
  }
  BuyingAfterClickItem(){
    console.log("cart items for buying => ",this.cartItems);
    console.log("total prices => ",this.sumTotal);
    this.router.navigate(['/product/success']);
  }

}
