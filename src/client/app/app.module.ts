import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import {
  AuthGuard,
  AuthService,
  SharedServices,
} from './services/index';
import {
  FooterModule,
  HomeModule,
  LoginModule,
  MinorViewModule,
  NavigationModule,
  RegisterModule,
  TopnavbarModule,
} from './components/index';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogueRootModule } from './catalogue/components/index';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HomeModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,
    CatalogueRootModule,
    BrowserAnimationsModule,
    FooterModule,
    NavigationModule,
    TopnavbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http],
      },
      isolate: false
    }),
    AppRoutingModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [AuthService, AuthGuard, SharedServices, {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
