import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarlyCustomerComponent} from './carly-customer.component';
import {CarlySharedModule} from '../carly-shared/carly-shared.module';
import {CarlyCustomerRouting} from './carly-customer.routing';

@NgModule({
  declarations: [CarlyCustomerComponent],
  imports: [
    CommonModule,
    CarlyCustomerRouting,
    CarlySharedModule,
    RouterModule
  ]
})

export class CarlyCustomerModule { }
