import { AuthGuard } from '../../services/index';
import { BasicComponent } from '../layout/layouts/basic.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { BlankComponent } from './blank.component';

//import { LoginComponent } from '../../login/login.component';
//import { MinorViewComponent } from '../../minor-view/minor-view.component';

//import { RegisterComponent } from '../../register/register.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: BasicComponent,
                children: [
                    { path: 'home', component: HomeComponent },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
