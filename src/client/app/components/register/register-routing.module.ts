import { BlankComponent } from '../layout/layouts/blank.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: BlankComponent,
                children: [
                    { path: 'register', component: RegisterComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
