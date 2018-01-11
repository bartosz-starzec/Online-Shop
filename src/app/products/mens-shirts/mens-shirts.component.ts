import { Component, OnInit } from '@angular/core';
import {Shirt} from '../shirt.model';
import {ShirtsService} from '../shirts.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-mens-shirts',
  templateUrl: './mens-shirts.component.html',
  styleUrls: ['./mens-shirts.component.scss']
})
export class MensShirtsComponent implements OnInit {
  shirts: Shirt[];
  subscription: Subscription;

  constructor(private shirtsService: ShirtsService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.importShirts();
    this.subscription = this.shirtsService.shirtsChan.subscribe(
      (shirts: Shirt[]) => {
        this.shirts = shirts;
      }
    )
    this.shirts = this.shirtsService.getShirts();
  }

}
