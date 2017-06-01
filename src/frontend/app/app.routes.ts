import { BasicComponent, BlankComponent } from './components/index';
import { LoginComponent, RegisterComponent } from './components/index';

import { AuthGuard } from './services/index';
import { HomeComponent } from './components/index';
import { MinorViewComponent } from './components/index';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // App views
  {
    path: '', component: BasicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'minorView', component: MinorViewComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // Handle all other routes
  { path: '**', component: HomeComponent ,canActivate: [AuthGuard] }
];
