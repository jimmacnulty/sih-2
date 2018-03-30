import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './route';
import { IssueListingComponent } from './issue-listing/issue-listing.component';
import { WizardComponent } from './wizard/wizard.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListingComponent } from './ticket-listing/ticket-listing.component';


import { SignupComponent } from './signup/signup.component';

import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';





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
    

    SignupComponent,

    MapComponent
    

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule,
    ArchwizardModule,
    AngularFirestoreModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9YhXuCIwp98IRGMMbJypBPVhJaTonx3k'
    })

  ],
  providers: [ AngularFireAuth, AngularFireDatabase ],
  bootstrap: [AppComponent]
})  

  
export class AppModule { }


 






