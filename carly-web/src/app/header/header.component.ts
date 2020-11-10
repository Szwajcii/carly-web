import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../carly-shared/components/auth/auth.service';
import {Subscription} from 'rxjs';
import {Roles} from '../carly-shared/model/roles.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;
  CarlyCustomer = Roles.CARLY_CUSTOMER;
  CarlyCompany = Roles.CARLY_COMPANY;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.userContext.subscribe(user => {
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
