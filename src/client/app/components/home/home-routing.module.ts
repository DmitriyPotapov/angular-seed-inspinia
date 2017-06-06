import { AuthGuard } from '../../services/index';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'home', component: HomeComponent },
        ])
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
