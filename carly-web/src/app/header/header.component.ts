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
  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyCustomer = Roles.CARLY_CUSTOMER;
  CarlyFactory = Roles.CARLY_FACTORY;

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
