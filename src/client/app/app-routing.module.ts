import { AuthGuard } from './services/index';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      // Main redirect
     { path: '', redirectTo: 'home', pathMatch: 'full' },

      // Handle all other routes
     { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

