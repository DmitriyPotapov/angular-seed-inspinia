import { ApiTestService } from '../../services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule, HomeRoutingModule],
    providers: [ApiTestService]
})

export class HomeModule { }
