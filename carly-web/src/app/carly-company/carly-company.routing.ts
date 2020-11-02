import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CarlyCompanyComponent} from './carly-company.component';
import {PartsComponent} from '../carly-shared/components/parts/parts.component';
import {CarsComponent} from '../carly-shared/components/cars/cars.component';
import {BreaksComponent} from '../carly-shared/components/breaks/breaks.component';
import {EnginesComponent} from '../carly-shared/components/engines/engines.component';
import {TiresComponent} from '../carly-shared/components/tires/tires.component';
import {WheelsComponent} from '../carly-shared/components/wheels/wheels.component';
import {WindowsComponent} from '../carly-shared/components/windows/windows.component';
import {EquipmentComponent} from '../carly-shared/components/equipment/equipment.component';
import {NewsComponent} from '../carly-shared/components/news/news.component';
import {NewsAddComponent} from '../carly-shared/components/news/news-add/news-add.component';
import {NewsEditComponent} from '../carly-shared/components/news/news-edit/news-edit.component';
import {OrdersComponent} from '../carly-shared/components/orders/orders.component';
import {HomeComponent} from '../carly-shared/components/home/home.component';
import {BreaksAddComponent} from '../carly-shared/components/breaks/breaks-add/breaks-add.component';
import {BreaksEditComponent} from '../carly-shared/components/breaks/breaks-edit/breaks-edit.component';
import {EngineAddComponent} from '../carly-shared/components/engines/engine-add/engine-add.component';
import {EngineEditComponent} from '../carly-shared/components/engines/engine-edit/engine-edit.component';
import {EquipmentAddComponent} from '../carly-shared/components/equipment/equipment-add/equipment-add.component';
import {EquipmentEditComponent} from '../carly-shared/components/equipment/equipment-edit/equipment-edit.component';
import {TiresAddComponent} from '../carly-shared/components/tires/tires-add/tires-add.component';
import {TiresEditComponent} from '../carly-shared/components/tires/tires-edit/tires-edit.component';
import {WheelsAddComponent} from '../carly-shared/components/wheels/wheels-add/wheels-add.component';
import {WheelsEditComponent} from '../carly-shared/components/wheels/wheels-edit/wheels-edit.component';
import {WindowsAddComponent} from '../carly-shared/components/windows/windows-add/windows-add.component';
import {WindowsEditComponent} from '../carly-shared/components/windows/windows-edit/windows-edit.component';
import {PaintingComponent} from '../carly-shared/components/painting/painting.component';
import {PaintingAddComponent} from '../carly-shared/components/painting/painting-add/painting-add.component';
import {PaintingEditComponent} from '../carly-shared/components/painting/painting-edit/painting-edit.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: CarlyCompanyComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'news',
        component: NewsComponent,
        children: [
          {path: 'add', component: NewsAddComponent},
          {path: ':id', component: NewsEditComponent}
        ]
      },
      {path: 'orders', component: OrdersComponent},
      {
        path: 'cars',
        component: CarsComponent,
        children: [
        ]
      },
      {path: 'parts', component: PartsComponent},
      {
        path: 'breaks',
        component: BreaksComponent,
        children: [
          {path: 'add', component: BreaksAddComponent},
          {path: 'details/:id', component: BreaksEditComponent}
        ]
      },
      {
        path: 'engines',
        component: EnginesComponent,
        children: [
          {path: 'add', component: EngineAddComponent},
          {path: 'details/:id', component: EngineEditComponent}
        ]
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
        children: [
          {path: 'add', component: EquipmentAddComponent},
          {path: 'details/:id', component: EquipmentEditComponent}
        ]
      },
      {
        path: 'painting',
        component: PaintingComponent,
        children: [
          {path: 'add', component: PaintingAddComponent},
          {path: 'details/:id', component: PaintingEditComponent}
        ]
      },
      {
        path: 'tires',
        component: TiresComponent,
        children: [
          {path: 'add', component: TiresAddComponent},
          {path: 'details/:id', component: TiresEditComponent}
        ]
      },
      {
        path: 'wheels',
        component: WheelsComponent,
        children: [
          {path: 'add', component: WheelsAddComponent},
          {path: 'details/:id', component: WheelsEditComponent}
        ]
      },
      {
        path: 'windows',
        component: WindowsComponent,
        children: [
          {path: 'add', component: WindowsAddComponent},
          {path: 'details/:id', component: WindowsEditComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class CarlyCompanyRouting { }
