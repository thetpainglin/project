import { Component } from '@angular/core';
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : Array<Product> = [];
  id : string[] = [];

  constructor(private productService : ProductService) {

    this.productService.getAllProduct().subscribe((products)=>{
      this.products = products;
      this.id = products.map(prod=>prod.id);
    })
  }
}
