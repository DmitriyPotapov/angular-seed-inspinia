import { MdButtonModule, MdInputModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [SharedModule, MdButtonModule, MdInputModule]
})

export class LoginModule { }
