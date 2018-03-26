import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user'

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<Boolean>(false);

  constructor(private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  signUp(email : string, password : string) {
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise
      .catch(e => console.log(e.message));
    
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          this.router.navigate(['add']);
        }
        else
          console.log('Not Signed in!!')  
      })
  }

  login(email : string, password : string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => console.log(response)
    ).catch(function (error) {
      console.log(error);
      console.log("ERROR DURING SIGNIN");
      })
    
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
        }
        else
          console.log('Not Logged in!!')  
      })
    
    
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
