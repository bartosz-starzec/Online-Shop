import {Injectable} from '@angular/core';
import {Shirt} from '../products/shirt.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserPanelService {
  products: Shirt[] = [
    new Shirt('Zwykła koszula', 30,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg'),
  ];

  shirtChanged = new BehaviorSubject<Shirt[]>(this.products);

  toBasket(product: Shirt) {
    this.products.push(product);
    this.shirtChanged.next(this.products);
  }
}
