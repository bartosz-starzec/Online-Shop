import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  basket: Shirt[];
  price;
  count = 1;
  @ViewChild('amount') amount: ElementRef;

  constructor(private userPanelService: UserPanelService,
              private dataStorage: DataStorageService,
              private auth: AuthService) { }

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

  calcPrice(i: number) {
    const singlePrice = document.getElementsByClassName('prod__price-base')[i];
    const finishedPrice = document.getElementsByClassName('prod__price-sum')[i];
    this.price = this.count * Number(singlePrice.innerHTML);
    finishedPrice.innerHTML = this.price;
  }

  increaseAmount(i: number) {
    this.count++;
    this.calcPrice(i);
    const lala = document.getElementsByClassName('amount__input');
    lala[i].setAttribute('value', String(this.count));
  }

  decreaseAmount(i: number) {
    if (this.count > 1) {
      this.count--;
      const lala = document.getElementsByClassName('amount__input');
      lala[i].setAttribute('value', String(this.count));
    }
    this.calcPrice(i);
  }

  saveBasket(name: string) {
    this.dataStorage.saveBasket(this.products, name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
