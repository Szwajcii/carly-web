import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarlySharedModule} from './carly-shared/carly-shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {AuthInterceptorService} from './carly-shared/components/auth/auth-interceptor.service';
import {CarlyMatModule} from './carly-shared/modules/carly-mat.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarlySharedModule,
    BrowserAnimationsModule
  ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    exports: [
        CarlyMatModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
