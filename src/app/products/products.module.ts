import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {MensShirtsComponent} from './mens-shirts/mens-shirts.component';
import {WomensShirtsComponent} from './womens-shirts/womens-shirts.component';
import {DetailComponent} from './detail/detail.component';
import {SellerComponent} from './seller/seller.component';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import { ShirtItemComponent } from './mens-shirts/shirt-item/shirt-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    MensShirtsComponent,
    WomensShirtsComponent,
    DetailComponent,
    SellerComponent,
    ShirtItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {

}
