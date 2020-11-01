import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CarlyAdministratorComponent } from './carly-administrator.component';
import {CarlyAdministratorRoutingModule} from './carly-administrator.routing';
import {CarlySharedModule} from '../carly-shared/carly-shared.module';


@NgModule({
  declarations: [CarlyAdministratorComponent],
  imports: [
    CommonModule,
    CarlyAdministratorRoutingModule,
    CarlySharedModule,
    RouterModule
  ]
})
export class CarlyAdministratorModule { }
