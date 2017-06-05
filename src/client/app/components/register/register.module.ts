import { MdButtonModule, MdInputModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module'

@NgModule({
    declarations: [RegisterComponent],
    imports: [BrowserModule, MdButtonModule, MdInputModule, RegisterRoutingModule],
})

export class RegisterModule { }
