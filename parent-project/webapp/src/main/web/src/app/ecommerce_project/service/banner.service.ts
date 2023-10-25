import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Banner} from "../model/banner.model";
import {API_URL} from "../Config/Config";
import {Movie} from "../../model/movie.model";

const API =  API_URL+"banner";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  bannerArray : Array<Banner> = [];
  _banners : BehaviorSubject<Banner[]> = new BehaviorSubject<Banner[]>([]);
  readonly banners = this._banners.asObservable();

  constructor(private http : HttpClient) {
    /*
    this.bannerArray.push(new Banner("1","../assets/images/shoe_5.png",
                              "button Text","Good product",
                                  "This shoe is very beautiful","Small Text shoe",
                                "Mid Text Shoe","shoe for Large1","Shoe for Large2",
                                "20% off","Dec To Feb"));
    this.bannerArray.push(new Banner("2","../assets/images/shoe_4.png",
      "button Text","Good product Shoe",
      "This shoe is very beautiful","Small Text shoe",
      "Mid Text Shoe","shoe for Large1","Shoe for Large2",
      "25% off","Nov To Jan"));

     */

    this.fetchAllBanner().subscribe(banners =>{
      console.log("banners in backend api calling => ",banners);
      this.bannerArray = banners;
      this.emitChange();
    })


  }
  fetchAllBanner():Observable<Banner[]>{
   
    return this.http.get<Banner[]>(API);
  }
  private emitChange() {
    this._banners.next(this.bannerArray);
  }
  getAllBanner(){
   
    return this.banners;
  }

}
