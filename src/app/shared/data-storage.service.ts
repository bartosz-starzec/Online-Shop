import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Shirt} from '../products/shirt.model';
import {ShirtsService} from '../products/shirts.service';
import {AuthService} from '../auth/auth.service';
import * as firebase from 'firebase';
import {UserPanelService} from '../user-panel/user-panel.service';

@Injectable()
export class DataStorageService {
  shirts: Shirt[];
  basket: Shirt[];

  constructor(private httpClient: HttpClient, private shirtsService: ShirtsService,
              private authService: AuthService,
              private userPanel: UserPanelService) {
  }

  importBasket() {
      const token = this.authService.getToken();
      const uid = firebase.auth().currentUser.uid;
      this.httpClient.get<Shirt[]>('https://online-shop-815e7.firebaseio.com/basket/' + uid + '/name.json',
        {params: new HttpParams().set('auth', token)})
        .subscribe(
        (shirts: any) => {
            console.log(shirts);
        }
      );
  }

  saveBasket(products: Shirt[], name: string) {
    if (this.authService.isAuth()) {
      const token = this.authService.getToken();
      const uid = firebase.auth().currentUser.uid;
      const req = this.httpClient.put('https://online-shop-815e7.firebaseio.com/basket/' + uid + '/' + name + '.json', products, {
        observe: 'body',
          params: new HttpParams().set('auth', token)
      })
        .subscribe();
    }
  }

  storeShirts() {
    const token = this.authService.getToken();
    console.log(this.shirtsService.getShirts());
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
    // this.httpClient.get<Shirt[]>('https://online-shop-815e7.firebaseio.com/shirts.json')
    //   .subscribe(
    //     (shirts: Shirt[]) => {
    //       this.shirtsService.setShirts(shirts);
    //     }
    //   );
  }
}
