import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classState = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.classState = !this.classState;
  }

  calculateState(state: boolean) {
    if (state === true) {
      return {
        'active': !this.classState
      };
    } else {
      return {
        'active': this.classState
      };
    }
  }

}
