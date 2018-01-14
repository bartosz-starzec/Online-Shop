import {Shirt} from './shirt.model';
import {Subject} from 'rxjs/Subject';
import {DataStorageService} from '../shared/data-storage.service';

export class ShirtsService {
  constructor() {

  }
  shirtsChan = new Subject<Shirt[]>();
  private shirts: Shirt[];

  setShirts(shirts: Shirt[]) {
    this.shirts = shirts;
    this.shirtsChan.next(this.shirts.slice());
  }

  getShirt(id: number) {
    return this.shirts[id];
  }

  getShirts() {
   // this.data.importShirts();
   return this.shirts.slice();
  }
}
