import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PartsComponent } from './components/parts/parts.component';
import { CarsComponent } from './components/cars/cars.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EnginesComponentComponent } from './components/engines-component/engines-component.component';
import { EnginesComponent } from './components/engines/engines.component';
import { EnginesAddComponent } from './components/engines/engines-add/engines-add.component';
import { EngineAddComponent } from './components/engines/engine-add/engine-add.component';
import { EngineEditComponent } from './components/engines/engine-edit/engine-edit.component';



@NgModule({
  declarations: [HomeComponent, PartsComponent, CarsComponent, OrdersComponent, EnginesComponentComponent, EnginesComponent, EnginesAddComponent, EngineAddComponent, EngineEditComponent],
  imports: [
    CommonModule
  ]
})
export class CarlySharedModule { }
