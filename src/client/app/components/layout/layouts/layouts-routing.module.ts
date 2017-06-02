import { AuthGuard } from '../../../services/index';
import { BasicComponent } from './basic.component';
import { BlankComponent } from './blank.component';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { MinorViewComponent } from '../../minor-view/minor-view.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../../register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
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
            }
        ])
    ],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
