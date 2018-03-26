import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';


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
import { SignupComponent } from './signup/signup.component';



 // Initialize Firebase
 

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    LoginComponent,
    IssueListingComponent,
    WizardComponent,
    IssueDetailsComponent,
    TicketDetailsComponent,
    TicketListingComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ArchwizardModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})  

  
export class AppModule { }


 






