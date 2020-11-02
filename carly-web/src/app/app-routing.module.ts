import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';
import {CarlyRoleGuard} from './carly-shared/services/guards/carly-role-guard';
import {Roles} from './carly-shared/model/roles.model';
import {CarlyMatcher} from './carly-shared/services/matcher';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        canActivate: [CarlyRoleGuard],
        data: {roles: [Roles.CARLY_ADMINISTRATOR]},
        matcher: CarlyMatcher.carlyAdministratorMatcher,
        loadChildren: () => import('./carly-administrator/carly-administrator.module').then(module => module.CarlyAdministratorModule)
      },
      {
        canActivate: [CarlyRoleGuard],
        data: {roles: [Roles.CARLY_COMPANY]},
        matcher: CarlyMatcher.carlyCompanyMatcher,
        loadChildren: () => import('./carly-company/carly-company.module').then(module => module.CarlyCompanyModule)
      },
      {
        canActivate: [CarlyRoleGuard],
        data: {roles: [Roles.CARLY_CUSTOMER]},
        matcher: CarlyMatcher.carlyCustomerMatcher,
        loadChildren: () => import('./carly-customer/carly-customer.module').then(module => module.CarlyCustomerModule)
      }
    ]
  },
  {
    path: 'auth', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
