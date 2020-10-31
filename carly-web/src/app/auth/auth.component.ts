import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {NgForm} from '@angular/forms';
import {AuthModel} from '../carly-shared/model/auth-model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthResponseData} from '../carly-shared/model/auth-response-data.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;

    const authModel = new AuthModel(form.value.email, form.value.password);
    console.log(authModel);

    let authAction: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authAction = this.authService.login(authModel);
    } else {
      authAction = this.authService.signUp(authModel);
    }

    authAction.subscribe(data => {
      console.log(data);
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });

    form.reset();
  }

}
