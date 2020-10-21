import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarlySharedModule} from './carly-shared/carly-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarlySharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
