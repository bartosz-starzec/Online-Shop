import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';
import { MensShirtsComponent } from './products/mens-shirts/mens-shirts.component';
import { WomensShirtsComponent } from './products/womens-shirts/womens-shirts.component';
import { DetailComponent } from './products/detail/detail.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { BasketComponent } from './user-panel/basket/basket.component';
import { HistoryComponent } from './user-panel/history/history.component';
import { SellerComponent } from './products/seller/seller.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ErrorComponent,
    ProductsComponent,
    MensShirtsComponent,
    WomensShirtsComponent,
    DetailComponent,
    UserPanelComponent,
    BasketComponent,
    HistoryComponent,
    SellerComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
