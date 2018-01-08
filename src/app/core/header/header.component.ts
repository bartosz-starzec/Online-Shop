import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import { NavigationEnd, Params, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classState = false;
  params;
  constructor(public authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      if(this.params !== this.router.url) {
        if (this.classState) {
          this.toggleState();
        }
      }
      this.params = this.router.url;
    });
  }

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
