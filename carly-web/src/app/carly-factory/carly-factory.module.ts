import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarlySharedModule} from '../carly-shared/carly-shared.module';
import {CarlyMatModule} from '../carly-shared/modules/carly-mat.module';
import {RouterModule} from '@angular/router';
import {CarlyFactoryComponent} from './carly-factory.component';
import {CarlyFactoryRouting} from './carly-factory.routing';
import { ContractsComponent } from './contracts/contracts.component';
import { ContractsDatatableComponent } from './contracts/contracts-datatable/contracts-datatable.component';

@NgModule({
  declarations: [CarlyFactoryComponent, ContractsComponent, ContractsDatatableComponent],
  imports: [
    CommonModule,
    CarlyFactoryRouting,
    CarlySharedModule,
    CarlyMatModule,
    RouterModule
  ]
})
export class CarlyFactoryModule {
}
