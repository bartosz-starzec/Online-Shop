import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserPanelService} from '../user-panel.service';
import {Shirt} from '../../products/shirt.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  products: Shirt[] = [];
  private subscription: Subscription;
  constructor(private userPanelService: UserPanelService) { }

  ngOnInit() {
    this.subscription = this.userPanelService.shirtChanged
      .subscribe(
        (shirts: Shirt[]) => {
          this.products = shirts;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
