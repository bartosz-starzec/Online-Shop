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
  }
  getBasket() {
    return this.products.slice();
  }
  toBasket(product: Shirt, size: string) {
    product.size = size;
    this.products.push(product);
    this.shirtChanged.next(this.products.slice());
  }




}
