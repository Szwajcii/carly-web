import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SignUp} from '../carly-shared/model/sign-up';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(signUpModel: SignUp) {
    return this.http.post<AuthResponseData>(`${environment.authenticateApi}`, signUpModel);
  }


}
