import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user'

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<Boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user : User) {
    if (user.userName !== '' && user.password != '' ) { 
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}