import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardArray : Array<Product> = [];
  _cards : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  readonly cards = this._cards.asObservable();

  sumTotal : number = 0;

  OpenCloseCart : boolean = false;

  constructor() {
    
  }
  private emitChange() {
    this._cards.next(this.cardArray);
  }
  public getAllCard(){
    return this.cardArray;
  }
  public AddItem(item:any){

      this.cardArray.push(...item);
      this.emitChange();

  }
  getCartById(cardId:string){
    return this.cardArray.filter(data=>data.id === cardId);
  }
  public RemoveItemFromCard(id:string){
  this.cardArray = this.cardArray.flatMap(data=> data).filter(items => items.id !== id);
  this.emitChange();
  }

}
