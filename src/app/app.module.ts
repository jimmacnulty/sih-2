import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import * as firebase from 'firebase';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})  
export class AppModule { }


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






