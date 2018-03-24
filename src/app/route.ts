
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { AddComponent } from './add/add.component';
import { IssueListingComponent } from './issue-listing/issue-listing.component';


export const appRoutes:Routes = [
    { path: 'add', component: AddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'issue-list', component: IssueListingComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
]

