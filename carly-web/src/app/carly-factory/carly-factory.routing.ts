import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from '../carly-shared/components/home/home.component';
import {NewsComponent} from '../carly-shared/components/news/news.component';
import {NewsEditComponent} from '../carly-shared/components/news/news-edit/news-edit.component';
import {CarsComponent} from '../carly-shared/components/cars/cars.component';
import {NewsAddComponent} from '../carly-shared/components/news/news-add/news-add.component';
import {OrdersComponent} from '../carly-shared/components/orders/orders.component';
import {CarModelComponent} from '../carly-shared/components/car-model/car-model.component';
import {CarModelAddComponent} from '../carly-shared/components/car-model/car-model-add/car-model-add.component';
import {CarModelEditComponent} from '../carly-shared/components/car-model/car-model-edit/car-model-edit.component';
import {PartsComponent} from '../carly-shared/components/parts/parts.component';
import {BrakesComponent} from '../carly-shared/components/brakes/brakes.component';
import {BrakesAddComponent} from '../carly-shared/components/brakes/brakes-add/brakes-add.component';
import {BrakesEditComponent} from '../carly-shared/components/brakes/brakes-edit/brakes-edit.component';
import {EnginesComponent} from '../carly-shared/components/engines/engines.component';
import {EngineAddComponent} from '../carly-shared/components/engines/engine-add/engine-add.component';
import {EngineEditComponent} from '../carly-shared/components/engines/engine-edit/engine-edit.component';
import {EquipmentComponent} from '../carly-shared/components/equipment/equipment.component';
import {EquipmentAddComponent} from '../carly-shared/components/equipment/equipment-add/equipment-add.component';
import {EquipmentEditComponent} from '../carly-shared/components/equipment/equipment-edit/equipment-edit.component';
import {PaintingComponent} from '../carly-shared/components/painting/painting.component';
import {PaintingAddComponent} from '../carly-shared/components/painting/painting-add/painting-add.component';
import {PaintingEditComponent} from '../carly-shared/components/painting/painting-edit/painting-edit.component';
import {TiresComponent} from '../carly-shared/components/tires/tires.component';
import {TiresAddComponent} from '../carly-shared/components/tires/tires-add/tires-add.component';
import {TiresEditComponent} from '../carly-shared/components/tires/tires-edit/tires-edit.component';
import {WheelsComponent} from '../carly-shared/components/wheels/wheels.component';
import {WheelsAddComponent} from '../carly-shared/components/wheels/wheels-add/wheels-add.component';
import {WheelsEditComponent} from '../carly-shared/components/wheels/wheels-edit/wheels-edit.component';
import {WindowsComponent} from '../carly-shared/components/windows/windows.component';
import {WindowsAddComponent} from '../carly-shared/components/windows/windows-add/windows-add.component';
import {WindowsEditComponent} from '../carly-shared/components/windows/windows-edit/windows-edit.component';
import {CompanyEditComponent} from '../carly-shared/components/company/company-edit/company-edit.component';
import {FactoriesComponent} from '../carly-shared/components/factories/factories.component';
import {CarlyFactoryComponent} from './carly-factory.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CarlyFactoryComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'news',
        children: [
          {path: '', component: NewsComponent},
          {path: 'add', component: NewsAddComponent},
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
          {path: 'add', component: CarModelAddComponent},
          {path: 'details/:id', component: CarModelEditComponent}
        ]
      },
      {path: 'parts', component: PartsComponent},
      {
        path: 'brakes',
        children: [
          {path: '', component: BrakesComponent},
          {path: 'add', component: BrakesAddComponent},
          {path: 'details/:id', component: BrakesEditComponent}
        ]
      },
      {
        path: 'engines',
        children: [
          {path: '', component: EnginesComponent},
          {path: 'add', component: EngineAddComponent},
          {path: 'details/:id', component: EngineEditComponent}
        ]
      },
      {
        path: 'equipment',
        children: [
          {path: '', component: EquipmentComponent},
          {path: 'add', component: EquipmentAddComponent},
          {path: 'details/:id', component: EquipmentEditComponent}
        ]
      },
      {
        path: 'painting',
        children: [
          {path: '', component: PaintingComponent},
          {path: 'add', component: PaintingAddComponent},
          {path: 'details/:id', component: PaintingEditComponent}
        ]
      },
      {
        path: 'tires',
        children: [
          {path: '', component: TiresComponent},
          {path: 'add', component: TiresAddComponent},
          {path: 'details/:id', component: TiresEditComponent}
        ]
      },
      {
        path: 'wheels',
        children: [
          {path: '', component: WheelsComponent},
          {path: 'add', component: WheelsAddComponent},
          {path: 'details/:id', component: WheelsEditComponent}
        ]
      },
      {
        path: 'windows',
        children: [
          {path: '', component: WindowsComponent},
          {path: 'add', component: WindowsAddComponent},
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

export class CarlyFactoryRouting { }
