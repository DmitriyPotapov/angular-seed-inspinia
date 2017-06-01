import { BasicComponent, BlankComponent, FooterModule, NavigationModule, TopnavbarModule } from '../index';

import { BrowserModule } from '@angular/platform-browser';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlankComponent, BasicComponent],
    imports: [BrowserModule, RouterModule, NavigationModule, TopnavbarModule, FooterModule, LayoutsRoutingModule],
    exports: [BlankComponent, BasicComponent]
})

export class LayoutsModule { }
