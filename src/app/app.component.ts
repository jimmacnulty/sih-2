import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  isLoggedIn: boolean = false;
  
  constructor(private af: AngularFireAuth, private router: Router) {
    

    this.af.authState.subscribe(user => {
      if (user) {
        //logged in
        console.log('Logged in', user.uid);
        this.isLoggedIn = true;
        // this.router.navigate(['/add']);
      } else{
        //logged out
        this.isLoggedIn = false;
        console.log('Logged out!!');
        //this.router.navigate(['/login']);
      }
    })
  }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['/add'])
  }

  onTicketList() {
    this.router.navigate(['/issuelist'])
  }

  onLogIn() {
    this.router.navigate(['/login']);
  }

  onLogOut() {
    this.af.auth.signOut();
  }


  title = 'app';  
}



