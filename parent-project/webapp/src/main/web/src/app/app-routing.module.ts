import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from "./page/page-not-found/page-not-found.component";

import {LayoutComponent} from "./ecommerce_project/component/layout/layout.component";
import {ProductComponent} from "./ecommerce_project/component/product/product.component";
import {CartComponent} from "./ecommerce_project/component/cart/cart.component";
import {SuccessComponent} from "./ecommerce_project/component/success/success.component";
import {
  ProductDetailsPageComponent
} from "./ecommerce_project/component/product-details-page/product-details-page.component";
import {AdminComponent} from "./ecommerce_project/component/admin/admin.component";
import {LoginPageComponent} from "./ecommerce_project/component/login-page/login-page.component";
import {AuthGuard} from "./ecommerce_project/auth/auth.guard";
import {LogoutPageComponent} from "./ecommerce_project/component/logout-page/logout-page.component";

const routes: Routes = [
  /*
  {path : 'home',title : "Home",component : HomePageComponent,
    children : [
      {
        path : 'example',title : "Home",component : HelloWorldComponent
      }
    ]
  },
  {path : 'movies',title : "Movies",component : MovieListPageComponent},
  {path : 'movies/:id',component : MovieListDetailComponent},
  {path : 'hello',redirectTo : '/movies', pathMatch : 'full'},
  {path : '**', component : PageNotFoundComponent},
*/
  {path : '',title : "ecommerce project",component : LayoutComponent},
  {path : 'product/cart',title : "cart",component : CartComponent},
  {path : 'product/success',title : "success",component : SuccessComponent},
  {path : 'product/:productId',title : "product details",component : ProductDetailsPageComponent},
  {path : 'admin',title : "Admin Page",component : AdminComponent , canActivate : [AuthGuard]},
  {path : 'login',title : "Login Page",component : LoginPageComponent },
  {path : 'logout',title : "Logout Page",component : LogoutPageComponent , canActivate : [AuthGuard]},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
