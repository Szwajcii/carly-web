import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewsComponent} from '../carly-shared/components/news/news.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CarlyAdministratorRoutingModule { }
