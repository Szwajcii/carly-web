import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {AuthService} from '../../auth/auth.service';
import {Roles} from '../model/roles.model';
import {UserContext} from '../model/user-context.model';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  userManagementApi = 'api/users';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  findAll(params: HttpParams): Observable<User> {
    return null;
  }

  // FIXME: After connection with BE replace UserContext with User model!!!
  getUserContext(): Observable<UserContext> {
    return this.authService.userContext;
  }

  isUserHasRole(role: Roles): Observable<boolean> {
    return this.getUserContext().pipe(map(user => user.role === role));
  }
}
