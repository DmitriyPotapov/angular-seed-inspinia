import { ApiTestService } from '../../services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule],
    providers: [ApiTestService]
})

export class HomeModule { }
