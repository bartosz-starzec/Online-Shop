import { Component, OnInit } from '@angular/core';
import {ShirtsService} from '../shirts.service';
import {Shirt} from '../shirt.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  subscription: Subscription;
  shirts: Shirt[];
  constructor(private shirtService: ShirtsService, private dataStorage: DataStorageService,
              public auth: AuthService) { }

  ngOnInit() {
    this.dataStorage.importShirts();
    this.subscription = this.shirtService.shirtsChan.subscribe(
      (shirts: Shirt[]) => {
        this.shirts = shirts;
      }
    );
    this.shirts = this.shirtService.getShirts();

  }

  saveShirt() {
    this.dataStorage.storeShirts();
  }

}
