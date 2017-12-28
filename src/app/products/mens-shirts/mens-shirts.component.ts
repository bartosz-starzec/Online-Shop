import { Component, OnInit } from '@angular/core';
import {Shirt} from '../shirt.model';
import {ShirtsService} from '../shirts.service';

@Component({
  selector: 'app-mens-shirts',
  templateUrl: './mens-shirts.component.html',
  styleUrls: ['./mens-shirts.component.scss']
})
export class MensShirtsComponent implements OnInit {
  shirts: Shirt[];

  constructor(private shirtsService: ShirtsService) { }

  ngOnInit() {
    this.shirts = this.shirtsService.getShirts();
  }

}
