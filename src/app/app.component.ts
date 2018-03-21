import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{

  isLoggedIn$: Observable<Boolean>;
  
  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authservice.isLoggedIn;
  }
  
    onLogout(){
      this.authservice.logout();                      
    }


  title = 'app';  
}

