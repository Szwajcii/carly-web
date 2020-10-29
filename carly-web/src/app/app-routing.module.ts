import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './carly-shared/components/home/home.component';
import {PartsComponent} from './carly-shared/components/parts/parts.component';
import {CarsComponent} from './carly-shared/components/cars/cars.component';
import {OrdersComponent} from './carly-shared/components/orders/orders.component';
import {EnginesComponent} from './carly-shared/components/engines/engines.component';
import {EngineAddComponent} from './carly-shared/components/engines/engine-add/engine-add.component';
import {EngineEditComponent} from './carly-shared/components/engines/engine-edit/engine-edit.component';
import {BreaksComponent} from './carly-shared/components/breaks/breaks.component';
import {BreaksEditComponent} from './carly-shared/components/breaks/breaks-edit/breaks-edit.component';
import {BreaksAddComponent} from './carly-shared/components/breaks/breaks-add/breaks-add.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'parts',
    component: PartsComponent,
    canActivate: [AuthGuard]
  },
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
    children: [
      {path: '', component: EnginesComponent},
      {path: 'add', component: EngineAddComponent},
      {path: 'detail/:id', component: EngineEditComponent}
    ]
  },
  {
    path: 'cars', component: CarsComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'auth', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
