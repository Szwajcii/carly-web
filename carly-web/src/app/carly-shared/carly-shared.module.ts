import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PartsComponent } from './components/parts/parts.component';
import { CarsComponent } from './components/cars/cars.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EnginesComponent } from './components/engines/engines.component';
import { EngineAddComponent } from './components/engines/engine-add/engine-add.component';
import { EngineEditComponent } from './components/engines/engine-edit/engine-edit.component';
import { BreaksComponent } from './components/breaks/breaks.component';
import { BreaksAddComponent } from './components/breaks/breaks-add/breaks-add.component';
import { BreaksEditComponent } from './components/breaks/breaks-edit/breaks-edit.component';
import {CarlyMatModule} from './modules/carly-mat.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PartsComponent,
    CarsComponent,
    OrdersComponent,
    EnginesComponent,
    EngineAddComponent,
    EngineEditComponent,
    BreaksComponent,
    BreaksAddComponent,
    BreaksEditComponent
  ],
  imports: [
    CommonModule,
    CarlyMatModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class CarlySharedModule { }
