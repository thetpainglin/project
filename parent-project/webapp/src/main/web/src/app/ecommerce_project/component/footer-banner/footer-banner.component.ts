import { Component } from '@angular/core';
import {Banner} from "../../model/banner.model";
import {BannerService} from "../../service/banner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer-banner',
  templateUrl: './footer-banner.component.html',
  styleUrls: ['./footer-banner.component.css']
})
export class FooterBannerComponent {
 footerBanner : Array<Banner> = [];

 constructor(private bannerService : BannerService,
             private router : Router) {
   this.bannerService.getAllBanner().subscribe(banners=>{
     this.footerBanner = banners;
   })
 }
  BtnClickToDetails(id:string){
  	console.log("id => ",id);
    this.router.navigate(['/product/'+id]);
  }
}
