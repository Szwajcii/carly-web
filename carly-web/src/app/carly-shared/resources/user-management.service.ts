import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {AuthService} from '../components/auth/auth.service';
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

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${this.userManagementApi}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.userManagementApi}`, user);
  }

  getUserContext(): Observable<UserContext> {
    return this.authService.userContext;
  }

  isUserHasRole(role: Roles): Observable<boolean> {
    return this.getUserContext()
      .pipe(
        filter(user => !!user),
        map(user => user.roles.includes(role))
      );
  }

  isUserHasOneOfRoles(roles: Roles[]): Observable<boolean> {
    return this.getUserContext().pipe(map(user => !!roles.some(role => {
      console.log(user);
      return user.roles.includes(role);
    })));
  }

  findUserContextId(): Observable<string> {
    return this.getUserContext()
      .pipe(
        filter(data => !!data),
        map(data => data.id)
      );
  }

}
