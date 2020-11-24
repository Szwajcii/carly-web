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
import {NewsEditComponent} from '../carly-shared/components/news/news-edit/news-edit.component';
import {OrdersComponent} from '../carly-shared/components/orders/orders.component';
import {HomeComponent} from '../carly-shared/components/home/home.component';
import {BreaksEditComponent} from '../carly-shared/components/breaks/breaks-edit/breaks-edit.component';
import {EngineEditComponent} from '../carly-shared/components/engines/engine-edit/engine-edit.component';
import {EquipmentEditComponent} from '../carly-shared/components/equipment/equipment-edit/equipment-edit.component';
import {TiresEditComponent} from '../carly-shared/components/tires/tires-edit/tires-edit.component';
import {WheelsEditComponent} from '../carly-shared/components/wheels/wheels-edit/wheels-edit.component';
import {WindowsEditComponent} from '../carly-shared/components/windows/windows-edit/windows-edit.component';
import {PaintingComponent} from '../carly-shared/components/painting/painting.component';
import {PaintingEditComponent} from '../carly-shared/components/painting/painting-edit/painting-edit.component';
import {CompanyEditComponent} from '../carly-shared/components/company/company-edit/company-edit.component';
import {CarModelComponent} from '../carly-shared/components/car-model/car-model.component';
import {CarModelEditComponent} from '../carly-shared/components/car-model/car-model-edit/car-model-edit.component';
import {FactoriesComponent} from '../carly-shared/components/factories/factories.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: CarlyCompanyComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'news',
        children: [
          {path: '', component: NewsComponent},
          {path: ':id', component: NewsEditComponent}
        ]
      },
      {path: 'orders', component: OrdersComponent},
      {
        path: 'cars',
        children: [
          {path: '', component: CarsComponent}
        ]
      },
      {
        path: 'models',
        children: [
          {path: '', component: CarModelComponent},
          {path: 'details/:id', component: CarModelEditComponent}
        ]
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
        path: 'profile',
        children: [
          {path: '', component: CompanyEditComponent}
        ]
      },
      {
        path: 'factories',
        children: [
          {path: '', component: FactoriesComponent}
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
