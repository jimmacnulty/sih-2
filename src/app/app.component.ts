import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  isLoggedIn$: Observable<Boolean>;
  
  constructor(private authservice: AuthService) {}

  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBXtKT8C2d53fKzizznKFefOVqC5M46mSw",
        authDomain: "sih-2-3e356.firebaseapp.com",
        databaseURL: "https://sih-2-3e356.firebaseio.com",
        projectId: "sih-2-3e356",
        storageBucket: "",
        messagingSenderId: "693586778503"
      }
    )
  }
  
    onLogout(){
      this.authservice.logout();                      
    }


  title = 'app';  
}

