import {Injectable, OnInit} from '@angular/core';
import {Shirt} from '../products/shirt.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserPanelService {

  shirtChanged = new Subject<Shirt[]>();

  constructor() {
  }

  private products: Shirt[] = [];

  setBasket(products: Shirt[]) {
    this.products = products;
    this.shirtChanged.next(this.products.slice());
  }

  getBasket() {
    return this.products.slice();
  }

  toBasket(product: Shirt) {
    this.products.push(product);
    this.shirtChanged.next(this.products.slice());
  }




}
