import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarlyCompanyComponent} from './carly-company.component';
import {CarlySharedModule} from '../carly-shared/carly-shared.module';
import {CarlyCompanyRouting} from './carly-company.routing';
import {CarlyMatModule} from '../carly-shared/modules/carly-mat.module';

@NgModule({
  declarations: [CarlyCompanyComponent],
  imports: [
    CommonModule,
    CarlyCompanyRouting,
    CarlySharedModule,
    CarlyMatModule,
    RouterModule
  ]
})
export class CarlyCompanyModule { }
