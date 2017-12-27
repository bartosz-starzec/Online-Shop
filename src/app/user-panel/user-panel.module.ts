import {NgModule} from '@angular/core';

import {BasketComponent} from './basket/basket.component';
import {HistoryComponent} from './history/history.component';
import {CommonModule} from '@angular/common';
import {UserPanelComponent} from './user-panel.component';
import {UserPanelRoutingModule} from './user-panel-routing.module';

@NgModule({
  declarations: [
    UserPanelComponent,
    BasketComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    UserPanelRoutingModule
  ]
})
export class UserPanelModule {

}
