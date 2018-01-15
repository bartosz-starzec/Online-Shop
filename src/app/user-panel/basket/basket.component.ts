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

  increaseAmount() {
    this.count++;
    this.amount.nativeElement.value = this.count;
  }

  decreaseAmount() {
    if (this.count > 1) {
      this.count--;
      this.amount.nativeElement.value = this.count;
    }
  }

  saveBasket(name: string) {
    this.dataStorage.saveBasket(this.products, name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
