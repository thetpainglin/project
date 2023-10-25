import {Product} from "./product.model";

export class Banner {

  id : string = "";
  image : string = "";
  buttonText : string = "";
  product : string = "";
  desc : string ="";
  smallText : string = "";
  midText : string = "";
  largeText1 : string = "";
  largeText2 : string = "";
  discount : string = "";
  saleTime : string = "";
  product_id : any = "";

  constructor(id : string , image : string , buttonText : string, product : string , desc : string
              ,smallText : string, midText : string , largeText1 : string, largeText2 : string,
              discount : string, saleTime : string) {

    this.id = id;
    this.image = image;
    this.buttonText = buttonText;
    this.product = product;
    this.desc = desc;
    this.smallText= smallText;
    this.midText = midText;
    this.largeText1 = largeText1;
    this.largeText2 = largeText2;
    this.discount = discount;
    this.saleTime = saleTime;
    //this.product_id = product_id;

  }

}
