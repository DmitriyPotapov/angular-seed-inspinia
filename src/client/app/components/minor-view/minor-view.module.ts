import { BrowserModule } from '@angular/platform-browser';
import { MinorViewComponent } from './minor-view.component';
import { MinorViewRoutingModule } from './minor-view-routing.module'
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [MinorViewComponent],
    imports: [BrowserModule, MinorViewRoutingModule],
})

export class MinorViewModule { }
