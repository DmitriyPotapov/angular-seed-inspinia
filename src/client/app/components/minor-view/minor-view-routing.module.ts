import { AuthGuard } from '../../services/index';
import { BasicComponent } from '../layout/layouts/basic.component';
import { MinorViewComponent } from '../minor-view/minor-view.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: BasicComponent,
                children: [
                    { path: 'minorView', component: MinorViewComponent, canActivate: [AuthGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MinorViewRoutingModule { }
