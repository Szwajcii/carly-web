import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userContext.pipe(
      take(1),
      exhaustMap(userContext => {
        if (!userContext) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', userContext.token),
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': `Bearer ${userContext.token}`
          }
        });
        return next.handle(modifiedReq);
      })
    );
  }

}
