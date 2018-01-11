import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Shirt} from '../products/shirt.model';
import {ShirtsService} from '../products/shirts.service';
import {AuthService} from '../auth/auth.service';
import * as firebase from 'firebase';
import {UserPanelService} from '../user-panel/user-panel.service';

@Injectable()
export class DataStorageService implements OnInit{
  shirts: Shirt[];

  constructor(private httpClient: HttpClient, private shirtsService: ShirtsService,
              private authService: AuthService) {
  }

  ngOnInit() {

  }

  importBasket() {
    if (this.authService.isAuth()) {
      const uid = firebase.auth().currentUser.uid;
      this.httpClient.get<Shirt[]>('https://online-shop-815e7.firebaseio.com/basket/' + uid + '.json')
        .subscribe(
          (shirts: Shirt[]) => {
            
          }
        );
    }
  }

  saveBasket(products: Shirt[]) {

    if (this.authService.isAuth()) {
      const token = this.authService.getToken();
      const uid = firebase.auth().currentUser.uid;
      const req = this.httpClient.put('https://online-shop-815e7.firebaseio.com/basket/' + uid + '.json', products, {
        observe: 'body',
          params: new HttpParams().set('auth', token)
      })
        .subscribe();
      console.log(products);
      console.log('done');
    }
  }

  storeShirts() {
    const token = this.authService.getToken();
    console.log('lala');
    const req = this.httpClient.put('https://online-shop-815e7.firebaseio.com/shirts.json',
      this.shirtsService.getShirts(), {
      observe: 'body',
        params: new HttpParams().set('auth', token)
      })
        .subscribe();

    // another way
    // if (this.authService.isAuth()) {
    //   const shirts = this.shirtsService.getShirts();
    //   firebase.database().ref('shirts').set(shirts);
    // }
  }

  importShirts() {
    this.httpClient.get<Shirt[]>('https://online-shop-815e7.firebaseio.com/shirts.json')
      .subscribe(
        (shirts: Shirt[]) => {
          this.shirtsService.setShirts(shirts);
        }
      );
  }
}
