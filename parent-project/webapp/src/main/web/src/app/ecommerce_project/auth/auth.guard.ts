import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../service/auth.service";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

/*
export const authGuard: CanActivateFn = (route, state) => {

  if(this.AuthService.isAuthenticated())
    {
      return true;
    }
    else {
      this.Router.navigate(['/login']);
      return false;
    }
};

 */


export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router :Router) {
  }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated())
    {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}


