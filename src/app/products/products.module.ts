import {NgModule, OnInit} from '@angular/core';
import {ProductsComponent} from './products.component';
import {MensShirtsComponent} from './mens-shirts/mens-shirts.component';
import {WomensShirtsComponent} from './womens-shirts/womens-shirts.component';
import {DetailComponent} from './detail/detail.component';
import {SellerComponent} from './seller/seller.component';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import { ShirtItemComponent } from './mens-shirts/shirt-item/shirt-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ShirtsService} from './shirts.service';
import {Shirt} from './shirt.model';
import {DataStorageService} from '../shared/data-storage.service';

@NgModule({
  declarations: [
    ProductsComponent,
    MensShirtsComponent,
    WomensShirtsComponent,
    DetailComponent,
    SellerComponent,
    ShirtItemComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule{
}
