import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signUpUser(username: string, email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        respone => {
          this.signInUser(email, password);
          this.router.navigate(['/']);
          const token = firebase.auth().currentUser.uid;
          firebase.database().ref('users/' + token).set({
            username: username,
            email: email
          });
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
          }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }
}
