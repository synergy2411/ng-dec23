import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: 'AIzaSyBecXCx9l6VDzbDc7kjT8uHQHfmJ2mEjDs',
  authDomain: 'dec23-ng.firebaseapp.com',
});

const auth = getAuth(app);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor() {}

  onRegister(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  onLogin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred: UserCredential) => {
        console.log('LOGGED IN', userCred.user['accessToken']);
        this.token = userCred.user['accessToken'];
      })
      .catch(console.error);
  }

  isAuthenticated() {
    return this.token !== null;
  }

  getToken() {
    return this.token;
  }
}
