import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AddComponent } from './add/add.component';
import { appRoutes } from './route'
import * as firebase from 'firebase';


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBXtKT8C2d53fKzizznKFefOVqC5M46mSw",
  authDomain: "sih-2-3e356.firebaseapp.com",
  databaseURL: "https://sih-2-3e356.firebaseio.com",
  projectId: "sih-2-3e356",
  storageBucket: "",
  messagingSenderId: "693586778503"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})  

  
export class AppModule { }


 






