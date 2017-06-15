import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(
    {
      tokenName: 'token',
      headerPrefix: 'Bearer',
      tokenGetter: (() => {
        let tokenJson = JSON.parse(localStorage.getItem('token')).access_token;
        return tokenJson;
       }),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
    }
  ), http, options);
}

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule,
    ToastrModule.forRoot(),
    TranslateModule.forChild()],
  declarations: [],
  exports: [CommonModule, FormsModule, RouterModule, TranslateModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
        }
      ]
    };
  }
}
