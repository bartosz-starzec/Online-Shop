import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {ShirtsService} from '../products/shirts.service';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import {UserPanelService} from '../user-panel/user-panel.service';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShirtsService,
    AuthService,
    DataStorageService,
    UserPanelService
  ]


})
export class CoreModule {

}
