import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Shirt} from '../shirt.model';
import {ShirtsService} from '../shirts.service';
import {UserPanelService} from '../../user-panel/user-panel.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  shirt: Shirt;
  id: number;
  feature = 'about';
  constructor(private route: ActivatedRoute,
              private shirtsService: ShirtsService,
              private userPanelService: UserPanelService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.shirt = this.shirtsService.getShirt(this.id);
      }
    );
  }

  toBasket() {
    this.userPanelService.toBasket(this.shirt);
    this.router.navigate(['/user-panel/basket']);

  }

  toggleFeature(e, feature: string) {
    if (this.feature !== feature) {
      this.feature = feature;
    }
  }

  aboutProduct() {
    const about = document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  }

}
