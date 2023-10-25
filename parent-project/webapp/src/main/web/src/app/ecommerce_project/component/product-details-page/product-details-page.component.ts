import {Component} from '@angular/core';
import {Product} from "../../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

import {faStar,faStarHalfStroke,faStarHalf , faMinus,faPlus} from "@fortawesome/free-solid-svg-icons";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent {

  product : Array<Product> = [];
  allProducts : Array<Product> = [];

  productId! : string;

  item : any= "" ;

  quantity : number = 0;

  star = faStar;
  rating = faStarHalfStroke;
  half = faStarHalf;

  minus = faMinus;
  plus = faPlus;

  constructor(private route : ActivatedRoute,
              private productService : ProductService,
              private cardService : CardService,
              private router : Router) {
      this.productService.products.subscribe(product=>{
        console.log("all products for looping ",product);
        this.allProducts = product;
      })
  }
  ngOnInit(){
    this.productId = String(this.route.snapshot.paramMap.get('productId'));
    console.log("movie id ",this.productId);

    this.product = this.productService.getProductById(this.productId);
    console.log("product by productId ",this.product);

  }
  ngOnChange(){
    this.detailHandler(this.productId);

  }
  AddToCardBtnClick(id : string){

    let cardItem = this.productService.getProductById(id);


    if(this.cardService.cardArray.length == 0) {

      console.log("empty state ");
      this.cardService.AddItem(cardItem);

    }else {

      this.item = this.cardService.cardArray.find(x=>x.id == id);
      console.log("search id in item => ",this.item?.id == id);
      this.item?.id ? console.log("same id ") : this.cardService.AddItem(cardItem);

    }

  }

  detailHandler(id:string){
    console.log("detail handler ");
    this.productId = id;
    this.product = this.productService.getProductById(this.productId);
    return this.router.navigate(['/product/'+this.productId]);

  }
  BuyNowBtnClick(id:string){
    this.cardService.OpenCloseCart = true;
    console.log("cart open => ",this.cardService.OpenCloseCart);
    this.AddToCardBtnClick(id);
    return this.router.navigate(['/']);
  }

  incrementQuantity(id:string){
    this.productId = id;
    this.product.map(data=>data.id == id ? this.quantity = data.quantity : data);
    console.log("increment for origin state quantity => ",this.quantity);
    if(this.quantity  >= 10){
      this.quantity = 10;
      this.product.map(data=> data.id == id ? data.quantity = this.quantity : data);

    }
    else{
      this.quantity++;
      this.product.map(data=>data.id == id ? data.quantity = this.quantity : data);

    }

  }

  decrementQuantity(id:string){
    this.productId = id;
    this.product.map(data=>data.id == id ? this.quantity = data.quantity : data);
    console.log("decrement for origin state quantity => ",this.quantity);
    if(this.quantity  <= 1){
      this.quantity = 1;
      this.product.map(data=>data.id == id ? data.quantity = this.quantity : data);

    }
    else{
      this.quantity--;
      this.product.map(data=> data.id == id ? data.quantity = this.quantity : data);

    }

  }

}
