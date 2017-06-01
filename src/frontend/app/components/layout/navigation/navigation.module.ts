import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from '../index';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavigationComponent],
    imports: [BrowserModule, RouterModule],
    exports: [NavigationComponent],
})

export class NavigationModule { }
