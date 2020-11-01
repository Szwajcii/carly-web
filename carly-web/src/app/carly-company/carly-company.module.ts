import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarlyCompanyComponent} from './carly-company.component';
import {CarlySharedModule} from '../carly-shared/carly-shared.module';
import {CarlyCompanyRouting} from './carly-company.routing';

@NgModule({
  declarations: [CarlyCompanyComponent],
  imports: [
    CommonModule,
    CarlyCompanyRouting,
    CarlySharedModule,
    RouterModule
  ]
})
export class CarlyCompanyModule { }
