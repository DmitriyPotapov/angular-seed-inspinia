import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { MdButtonModule, MdInputModule } from '@angular/material';
@NgModule({
    declarations: [RegisterComponent],
    imports: [BrowserModule, MdButtonModule, MdInputModule],
})

export class RegisterModule { }
