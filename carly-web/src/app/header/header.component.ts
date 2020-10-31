import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {UserContext} from '../carly-shared/model/user-context.model';
import {Roles} from '../carly-shared/model/roles.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  CarlyAdministrator: UserContext['role'] = Roles.CARLY_ADMINISTRATOR;
  CarlyCustomer: UserContext['role'] = Roles.CARLY_CUSTOMER;
  CarlyCompany: UserContext['role'] = Roles.CARLY_COMPANY;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
