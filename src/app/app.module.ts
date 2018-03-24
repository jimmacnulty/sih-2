import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './route'
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { IssueListingComponent } from './issue-listing/issue-listing.component';
import { WizardComponent } from './wizard/wizard.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListingComponent } from './ticket-listing/ticket-listing.component';



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
    AddComponent,
    LoginComponent,
    IssueListingComponent,
    WizardComponent,
    IssueDetailsComponent,
    TicketDetailsComponent,
    TicketListingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})  

  
export class AppModule { }


 






