import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserPanelComponent} from './user-panel.component';
import {BasketComponent} from './basket/basket.component';
import {HistoryComponent} from './history/history.component';

const userPanelRoutes: Routes = [
  { path: '', component: UserPanelComponent, children: [
      { path: 'basket', component: BasketComponent },
      { path: 'history', component: HistoryComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(userPanelRoutes)
  ],
  exports: [RouterModule]
})
export class UserPanelRoutingModule {

}
