import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { MdButtonModule, MdInputModule } from '@angular/material';
@NgModule({
    declarations: [LoginComponent],
    imports: [BrowserModule, MdButtonModule, MdInputModule]
})

export class LoginModule { }
