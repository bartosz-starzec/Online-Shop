import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from './products.component';
import {MensShirtsComponent} from './mens-shirts/mens-shirts.component';
import {WomensShirtsComponent} from './womens-shirts/womens-shirts.component';
import {DetailComponent} from './detail/detail.component';
import {SellerComponent} from './seller/seller.component';

const productsRoutes: Routes = [
  { path: '', component: ProductsComponent, children: [
      { path: 'mens-shirts', component: MensShirtsComponent },
      { path: 'womens-shirts', component: WomensShirtsComponent },
      { path: 'mens-shirts/:id', component: DetailComponent },
      { path: 'womens-shirts/:id', component: DetailComponent },
      // { path: 'seller/:id', component: SellerComponent },
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
