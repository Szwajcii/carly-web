import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {Observable, of, zip} from 'rxjs';

@Injectable()
export class CarlyRoleGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(300, 'Carly role guard can activate');
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(400, 'Carly role guard can activate child');
    return this.canActivate(childRoute);
  }

}
