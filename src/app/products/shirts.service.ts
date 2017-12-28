import {Shirt} from './shirt.model';

export class ShirtsService {
  private shirts: Shirt[] = [
    new Shirt('Zwykła koszula', 30,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg'),
    new Shirt('Zwykła koszulka', 32,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg'),
    new Shirt('Zwykła koszulka', 32,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg'),
    new Shirt('Zwykła koszulka', 32,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg'),
    new Shirt('Zwykła koszulka', 32,
      'https://vistula.pl/product_picture/fit_in_1800x2400/20eb94a4b0480764b63eaed36fb99f83.jpg')
  ];

  getShirts() {
   return this.shirts.slice();
  }
}
