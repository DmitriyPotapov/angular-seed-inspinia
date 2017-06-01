import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        MaterialModule,
        ToastrModule.forRoot(),
        TranslateModule.forChild(),
    ],
    exports: [
        TranslateModule,
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ]
})
export class SharedModule {

}
