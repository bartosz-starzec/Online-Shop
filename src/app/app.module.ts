import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {ErrorRoutingModule} from './error/error-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    ErrorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
