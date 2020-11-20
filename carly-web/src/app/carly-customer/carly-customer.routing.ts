import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CarlyCustomerComponent} from './carly-customer.component';
import {HomeComponent} from '../carly-shared/components/home/home.component';
import {PartsComponent} from '../carly-shared/components/parts/parts.component';
import {BreaksComponent} from '../carly-shared/components/breaks/breaks.component';
import {BreaksEditComponent} from '../carly-shared/components/breaks/breaks-edit/breaks-edit.component';
import {EnginesComponent} from '../carly-shared/components/engines/engines.component';
import {EngineEditComponent} from '../carly-shared/components/engines/engine-edit/engine-edit.component';
import {TiresComponent} from '../carly-shared/components/tires/tires.component';
import {TiresEditComponent} from '../carly-shared/components/tires/tires-edit/tires-edit.component';
import {CarsComponent} from '../carly-shared/components/cars/cars.component';
import {EquipmentComponent} from '../carly-shared/components/equipment/equipment.component';
import {EquipmentEditComponent} from '../carly-shared/components/equipment/equipment-edit/equipment-edit.component';
import {WheelsComponent} from '../carly-shared/components/wheels/wheels.component';
import {WheelsEditComponent} from '../carly-shared/components/wheels/wheels-edit/wheels-edit.component';
import {WindowsComponent} from '../carly-shared/components/windows/windows.component';
import {WindowsEditComponent} from '../carly-shared/components/windows/windows-edit/windows-edit.component';
import {PaintingComponent} from '../carly-shared/components/painting/painting.component';
import {PaintingEditComponent} from '../carly-shared/components/painting/painting-edit/painting-edit.component';
import {UserEditComponent} from '../carly-shared/components/user/user-edit/user-edit.component';
import {OrdersComponent} from '../carly-shared/components/orders/orders.component';
import {CarModelComponent} from '../carly-shared/components/car-model/car-model.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: CarlyCustomerComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'cars', component: CarsComponent},
      {
        path: 'models', component: CarModelComponent
      },
      {path: 'parts', component: PartsComponent},
      {
        path: 'breaks',
        children: [
          {path: '', component: BreaksComponent},
          {path: 'details/:id', component: BreaksEditComponent}
        ]
      },
      {
        path: 'engines',
        children: [
          {path: '', component: EnginesComponent},
          {path: 'details/:id', component: EngineEditComponent}
        ]
      },
      {
        path: 'equipment',
        children: [
          {path: '', component: EquipmentComponent},
          {path: 'details/:id', component: EquipmentEditComponent}
        ]
      },
      {
        path: 'painting',
        children: [
          {path: '', component: PaintingComponent},
          {path: 'details/:id', component: PaintingEditComponent}
        ]
      },
      {
        path: 'tires',
        children: [
          {path: '', component: TiresComponent},
          {path: 'details/:id', component: TiresEditComponent}
        ]
      },
      {
        path: 'wheels',
        children: [
          {path: '', component: WheelsComponent},
          {path: 'details/:id', component: WheelsEditComponent}
        ]
      },
      {
        path: 'windows',
        children: [
          {path: '', component: WindowsComponent},
          {path: 'details/:id', component: WindowsEditComponent}
        ]
      },
      {
        path: 'orders',
        children: [
          {path: '', component: OrdersComponent}
        ]
      },
      {
        path: 'profile',
        children: [
          {path: '', component: UserEditComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class CarlyCustomerRouting { }
