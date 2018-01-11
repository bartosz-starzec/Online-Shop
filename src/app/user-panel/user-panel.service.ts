import {Injectable, OnInit} from '@angular/core';
import {Shirt} from '../products/shirt.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable()
export class UserPanelService {
  products: Shirt[];
  shirtChanged = new BehaviorSubject<Shirt[]>(this.products);

  constructor(private dataStorage: DataStorageService) {
    this.products = [
      new Shirt('Zwykła koszula', 30,
        'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg')
    ]
    this.shirtChanged.next(this.products);
  }

  toBasket(product: any) {
    this.products.push(product);
    this.shirtChanged.next(this.products);
    this.dataStorage.saveBasket(this.products);
  }
}
