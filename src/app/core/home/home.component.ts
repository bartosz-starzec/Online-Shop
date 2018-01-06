import { Component, OnInit } from '@angular/core';
import {ShirtsService} from '../../products/shirts.service';
import {Shirt} from '../../products/shirt.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shirts: Shirt[];
  constructor(private shirtService: ShirtsService) { }

  ngOnInit() {
    this.shirts = this.shirtService.getShirts();
  }

}
