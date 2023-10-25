import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../components/Config/Config";


const API =  API_URL+"products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArr : Array<Product> = [];
  _products : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  readonly products = this._products.asObservable();

  constructor(private http : HttpClient) {
/*
    this.productArr.push(new Product("1","Blue Tooth","../assets/images/bluetooth.png",
                      25,3,"This Bluetooth is very best"));
    this.productArr.push(new Product("2","Head Phone","../assets/images/head_phone_small.png",
      22,2,"This HeadPhone is very best"));
    this.productArr.push(new Product("3","Shoe","../assets/images/shoe_1.png",
      23,5,"This Shoe is very best"));


 */
    this.fetchAllProduct().subscribe(products => {
      this.productArr = products;
      this.emitChange();
    })
  }
  ngOnInit(){
  this.productArr;
  }

  fetchAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(API);
  }
  getAllProduct(){
   
    return this.products;
  }
  getProductById(productId:string){
    return this.productArr.filter(data=>data.id === productId);
  }

  private emitChange() {
    this._products.next(this.productArr);
  }

  saveProductAPI(product : Product){
    console.log("save product ",product);
    return this.http.post<Product>(API,product).subscribe((p)=>{
      console.log("api product save data => ",p);
      this.addProduct(product);
    });
  }
  updateProductAPI(product : Product){
    return this.http.put<Product>(API+"/"+product.id,product).subscribe((products)=>{
      console.log("api update product ",products);
      this.updateProduct(products);
    });
  }
  addProduct(product:any){
    console.log("api movie save data => ",product);
    this.productArr.push(product);
    this.emitChange();
  }
  updateProduct(product : Product){
    this.productArr = this.productArr.map(prod => {
      console.log("id check ",prod.id === product.id, " movie ",prod, " new movie ",product)
      return prod.id == product.id ? product : prod
    });
    this.emitChange();
  }

  deleteProductAPI(product : Product,callback : ()=>void  ){
    return this.http.delete<Product>(API+"/"+product.id).subscribe(p=>{
      this.deleteProduct(product.id);
      callback();
    });

  }
  deleteProduct(id : string){
    this.productArr = this.productArr.filter(item=> item.id != id);
    this.emitChange();
  }
}
