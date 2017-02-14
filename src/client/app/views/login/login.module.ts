import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import {loginComponent} from "./login.component";

@NgModule({
    declarations: [loginComponent],
    imports     : [BrowserModule,MaterialModule.forRoot()],
})

export class LoginModule {}