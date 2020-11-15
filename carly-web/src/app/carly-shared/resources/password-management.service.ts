import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChangePassword} from '../model/change-password.model';
import {Observable} from 'rxjs';

export interface PasswordResponse {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class PasswordManagementService {

  passwordManagementApi = 'api/password';

  constructor(private http: HttpClient) {
  }

  changePassword(password: ChangePassword): Observable<PasswordResponse> {
    return this.http.post<PasswordResponse>(`${this.passwordManagementApi}`, password);
  }

  resetPassword(email: string): Observable<PasswordResponse> {
    return this.http.post<PasswordResponse>(`${this.passwordManagementApi}`, email);
  }
}
