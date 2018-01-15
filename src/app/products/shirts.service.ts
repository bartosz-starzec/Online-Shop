import {Shirt} from './shirt.model';
import {Subject} from 'rxjs/Subject';
import {DataStorageService} from '../shared/data-storage.service';

export class ShirtsService {
  constructor() {

  }
  shirtsChan = new Subject<Shirt[]>();
  private shirts: Shirt[] = [
    new Shirt('Zwykła koszula', 31, 'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg',
      ' Koszula męska Milan w linii Vistula z białej tkaniny w bordowe kropki.\n' +
      '      Wykonana z wysokiej jakości egipskiej bawełny.\n' +
      '      Mankiet zapinany na guziki, z możliwością regulacji (dwa guziki, jedna dziurka).\n' +
      '      Kołnierz typu button-down, na plecach zaszewki.\n' +
      '      Koszula dobrze dopasowana do sylwetki doda stylizacji szyku.', 'Asortyment: koszula \n' +
      '          Marka: Vistula\n' +
      '          Skład materiału: 100% egipska bawełna\n' +
      '          Sylwetka: super slim\n' +
      '          Rękaw: długi\n' +
      '          Mankiet: zapinany na guzik\n' +
      '          Kołnierz: button-down')
  ];

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
