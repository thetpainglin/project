import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { QuestionItemV2Component } from './components/question-item-v2/question-item-v2.component';
import { BorderComponent } from './components/border/border.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { HilightDirective } from './hilight.directive';
import { ReactiveFormDemoComponent } from './components/reactive-form-demo/reactive-form-demo.component';
import {ModalModule} from "ngx-bootstrap/modal";
import { MovieCountComponent } from './components/movie-count/movie-count.component';
import { ChangeDetectionDemoComponent } from './components/change-detection-demo/change-detection-demo.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MovieListPageComponent } from './page/movie-list-page/movie-list-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { MovieListDetailComponent } from './page/movie-list-detail/movie-list-detail.component';
import { LayoutComponent } from './ecommerce_project/component/layout/layout.component';
import { NavbarComponent } from './ecommerce_project/component/navbar/navbar.component';
import { HomeComponent } from './ecommerce_project/component/home/home.component';
import { FooterComponent } from './ecommerce_project/component/footer/footer.component';
import { HeroBannerComponent } from './ecommerce_project/component/hero-banner/hero-banner.component';
import { FooterBannerComponent } from './ecommerce_project/component/footer-banner/footer-banner.component';
import { ProductComponent } from './ecommerce_project/component/product/product.component';
import { CartComponent } from './ecommerce_project/component/cart/cart.component';
import { SuccessComponent } from './ecommerce_project/component/success/success.component';
import { ProductDetailsPageComponent } from './ecommerce_project/component/product-details-page/product-details-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './ecommerce_project/component/admin/admin.component';
import { LoginPageComponent } from './ecommerce_project/component/login-page/login-page.component';
import { LogoutPageComponent } from './ecommerce_project/component/logout-page/logout-page.component';
import {TokenInterceptor} from "./ecommerce_project/auth/interceptor/TokenInterceptor";


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    ProfileComponent,
    QuestionContainerComponent,
    QuestionBoxComponent,
    QuestionItemComponent,
    QuestionItemV2Component,
    BorderComponent,
    PipeDemoComponent,
    HilightDirective,
    ReactiveFormDemoComponent,
    MovieCountComponent,
    ChangeDetectionDemoComponent,
    HomePageComponent,
    MovieListPageComponent,
    PageNotFoundComponent,
    MovieListDetailComponent,
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeroBannerComponent,
    FooterBannerComponent,
    ProductComponent,
    CartComponent,
    SuccessComponent,
    ProductDetailsPageComponent,
    AdminComponent,
    LoginPageComponent,
    LogoutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
