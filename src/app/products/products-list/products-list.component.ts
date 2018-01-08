import { Component, OnInit } from '@angular/core';
import {ShirtsService} from '../shirts.service';
import {Shirt} from '../shirt.model';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  shirts: Shirt[];
  constructor(private shirtService: ShirtsService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.shirts = this.shirtService.getShirts();
  }

  saveShirt() {
    this.dataStorage.storeShirts();
  }

}
