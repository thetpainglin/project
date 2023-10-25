import {Component, Input} from '@angular/core';
import {Product} from "../../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product : any = "";

  constructor(private router : Router) {
  }

  detailHandler(){
    console.log("detail handler ");
    this.router.navigate(['/product/'+this.product.id])
  }

}
