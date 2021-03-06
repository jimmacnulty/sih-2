
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { AddComponent } from './add/add.component';
import { IssueListingComponent } from './issue-listing/issue-listing.component';
import { SignupComponent } from './signup/signup.component';
import { WizardComponent } from './wizard/wizard.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { TicketListingComponent } from './ticket-listing/ticket-listing.component'
import { TicketDetailsComponent } from './ticket-details/ticket-details.component'

export const appRoutes:Routes = [
    { path: 'add', component: AddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'wizard', component: WizardComponent},
    { path: 'issuelist', component: IssueListingComponent },
    { path: 'issue-det', component: IssueDetailsComponent },
    { path: 'ticketlist', component: TicketListingComponent},
    { path: 'ticketdetail', component: TicketDetailsComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' }
]

