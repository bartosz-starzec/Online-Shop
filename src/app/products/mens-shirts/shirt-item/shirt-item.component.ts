import {Component, Input, OnInit} from '@angular/core';
import {Shirt} from '../../shirt.model';

@Component({
  selector: 'app-shirt-item',
  templateUrl: './shirt-item.component.html',
  styleUrls: ['./shirt-item.component.scss']
})
export class ShirtItemComponent implements OnInit {
  @Input() myShirt: Shirt;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
