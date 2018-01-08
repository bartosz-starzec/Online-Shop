import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Shirt} from '../products/shirt.model';
import {ShirtsService} from '../products/shirts.service';
import {AuthService} from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private shirtsService: ShirtsService,
              private authService: AuthService) {

  }

  storeShirts() {
    // const token = this.authService.getToken();
    // const database = firebase.database();
    // console.log('lala');
    // return this.httpClient.put('https://online-shop-815e7.firebaseio.com/shirts.json',
    //   this.shirtsService.getShirts(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //   });
    if (this.authService.isAuth()) {
      const shirts = this.shirtsService.getShirts();
      firebase.database().ref('shirts').set(shirts);
    }
  }
}
