
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

const router:Routes = [
    { path: 'app-add', component: AddComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
]

export const routes=RouterModule.forRoot(router);