export class Product {

  id : string = "";
  name : string = "";
  image : string = "";
  price : number = 0;
  quantity : number =0;
  details : string = "";
  constructor(id : string, name : string , image : string ,  price : number , quantity : number,  details : string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.details = details;
  }

}
