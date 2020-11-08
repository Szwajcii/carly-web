import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';
import {AuthModel} from '../../model/auth-model';
import {RegistrationComponent} from '../registration/registration.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {CarlyJwtResponse} from '../../model/carly-jwt-response.model';

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
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openRegistrationPage() {
    this.dialog.open(RegistrationComponent);
  }

  openResetPasswordPage() {
    this.dialog.open(ResetPasswordComponent);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;

    const authModel = new AuthModel(form.value.email, form.value.password);

    let authAction: Observable<CarlyJwtResponse>;
    authAction = this.authService.login(authModel);

    authAction.subscribe(data => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, errorMessage => {
      this.error = errorMessage;
      this.isLoading = false;
    });

    form.reset();
  }

}
