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
import { BreaksFormComponent } from './components/breaks/breaks-form/breaks-form.component';
import { BreaksEditComponent } from './components/breaks/breaks-edit/breaks-edit.component';
import {CarlyMatModule} from './modules/carly-mat.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentAddComponent } from './components/equipment/equipment-add/equipment-add.component';
import { EquipmentEditComponent } from './components/equipment/equipment-edit/equipment-edit.component';
import { TiresComponent } from './components/tires/tires.component';
import { TiresAddComponent } from './components/tires/tires-add/tires-add.component';
import { TiresEditComponent } from './components/tires/tires-edit/tires-edit.component';
import { WheelsComponent } from './components/wheels/wheels.component';
import { WheelsAddComponent } from './components/wheels/wheels-add/wheels-add.component';
import { WheelsEditComponent } from './components/wheels/wheels-edit/wheels-edit.component';
import { WindowsComponent } from './components/windows/windows.component';
import { WindowsAddComponent } from './components/windows/windows-add/windows-add.component';
import { WindowsEditComponent } from './components/windows/windows-edit/windows-edit.component';
import { PaintingComponent } from './components/painting/painting.component';
import { PaintingAddComponent } from './components/painting/painting-add/painting-add.component';
import { PaintingEditComponent } from './components/painting/painting-edit/painting-edit.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { PartsFormComponent } from './components/parts/parts-form/parts-form.component';
import { BreaksAddComponent } from './components/breaks/breaks-add/breaks-add.component';
import { EngineFormComponent } from './components/engines/engine-form/engine-form.component';
import { WheelsFormComponent } from './components/wheels/wheels-form/wheels-form.component';



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
    BreaksFormComponent,
    BreaksEditComponent,
    EquipmentComponent,
    EquipmentAddComponent,
    EquipmentEditComponent,
    TiresComponent,
    TiresAddComponent,
    TiresEditComponent,
    WheelsComponent,
    WheelsAddComponent,
    WheelsEditComponent,
    WindowsComponent,
    WindowsAddComponent,
    WindowsEditComponent,
    PaintingComponent,
    PaintingAddComponent,
    PaintingEditComponent,
    FormGroupComponent,
    FilterBarComponent,
    PartsFormComponent,
    BreaksAddComponent,
    EngineFormComponent,
    WheelsFormComponent
  ],
  imports: [
    CommonModule,
    CarlyMatModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class CarlySharedModule { }
