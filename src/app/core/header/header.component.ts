import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classState = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
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
