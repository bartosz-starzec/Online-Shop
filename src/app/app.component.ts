import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJ_RYX-zYdouQ0qDdr0ZZTKIJPa-_gDE8',
      authDomain: 'online-shop-815e7.firebaseapp.com',
      databaseURL: 'https://online-shop-815e7.firebaseio.com/'
    });

    const database = firebase.database();
  }

}
