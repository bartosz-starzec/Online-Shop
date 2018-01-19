import {Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserPanelService} from '../user-panel.service';
import {Shirt} from '../../products/shirt.model';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Shirt[];
  priceOfProducts: number[] = [];
  amountOfProducts: number[] = [];
  amount_Input = document.getElementsByClassName('amount__input');
  valueOfBasket = 0;

  constructor(private userPanelService: UserPanelService,
              private dataStorage: DataStorageService,
              private auth: AuthService) {
  }


  ngOnInit() {
    // if (this.auth.isAuth()) {
    //   this.dataStorage.importBasket();
    // }
    this.subscription = this.userPanelService.shirtChanged
      .subscribe(
        (shirts: Shirt[]) => {
          this.products = shirts;
        }
      );
    this.products = this.userPanelService.getBasket();
  }


  finalBasket(index) {
    this.valueOfBasket += this.products[index].price;
  }

  calcPrice(i: number) {
    const singlePrice = document.getElementsByClassName('prod__price-base');
    const finalPrice = document.getElementsByClassName('prod__price-sum');
    this.priceOfProducts[i] = this.amountOfProducts[i] * Number(singlePrice[i].innerHTML);
    finalPrice[i].innerHTML = String(this.priceOfProducts[i]);
  }
  j;
  increaseAmount(i: number) {
    if (!this.amountOfProducts[i]) {
      this.amountOfProducts[i] = 1;
    }
    this.amountOfProducts[i]++;
    this.amount_Input[i].setAttribute('value', String(this.amountOfProducts[i]));
    this.calcPrice(i);

    // const cena = document.getElementById('span');
    // cena.innerHTML = String(this.priceOfProducts);
  }
  decreaseAmount(i: number) {
    if (this.amountOfProducts[i] > 1) {
      this.amountOfProducts[i]--;
      this.amount_Input[i].setAttribute('value', String(this.amountOfProducts[i]));
    }
    this.calcPrice(i);
  }

  deleteProduct(i: number) {
    this.userPanelService.deleteProduct(i);
  }

  saveBasket(name: string) {
    this.dataStorage.saveBasket(this.products, name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
