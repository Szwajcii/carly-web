import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './carly-shared/components/home/home.component';
import {PartsComponent} from './carly-shared/components/parts/parts.component';
import {CarsComponent} from './carly-shared/components/cars/cars.component';
import {OrdersComponent} from './carly-shared/components/orders/orders.component';
import {EnginesComponent} from './carly-shared/components/engines/engines.component';
import {EngineAddComponent} from './carly-shared/components/engines/engine-add/engine-add.component';
import {EngineEditComponent} from './carly-shared/components/engines/engine-edit/engine-edit.component';
import {BreaksComponent} from './carly-shared/components/breaks/breaks.component';
import {BreaksFormComponent} from './carly-shared/components/breaks/breaks-form/breaks-form.component';
import {BreaksEditComponent} from './carly-shared/components/breaks/breaks-edit/breaks-edit.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'parts',
    children: [
      {path: '', component: PartsComponent},
      {
        path: 'engines',
        children: [
          {path: '', component: EnginesComponent},
          {path: 'add', component: EngineAddComponent},
          {path: 'detail/:id', component: EngineEditComponent}
        ]
      },
      {
        path: 'breaks',
        children: [
          {path: '', component: BreaksComponent},
          {path: 'add', component: BreaksFormComponent},
          {path: 'details/:id', component: BreaksEditComponent}
        ]
      }
    ]
  },
  {
    path: 'cars', component: CarsComponent
  },
  {
    path: 'orders', component: OrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
