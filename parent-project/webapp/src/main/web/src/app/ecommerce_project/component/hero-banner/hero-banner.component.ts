import { Component } from '@angular/core';
import {BannerService} from "../../service/banner.service";
import {Banner} from "../../model/banner.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {

  banners : Array<Banner> = [];

  constructor(private bannerService : BannerService,
              private router : Router) {
    bannerService.getAllBanner().subscribe(banners=>{
      this.banners = banners;
    })
  }
  BtnClickToDetails(id:string){
    this.router.navigate(['/product/'+id]);
  }
}
