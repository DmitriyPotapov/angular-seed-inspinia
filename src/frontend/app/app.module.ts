import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard, AuthService, SharedServices } from './services/index';
import { HomeModule, LayoutsModule, LoginModule, MinorViewModule, RegisterModule } from './components/index';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
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
    LayoutsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
     TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http],
            },
            isolate: false
        })
  ],
  declarations: [AppComponent],
  providers: [AuthService, AuthGuard, SharedServices, {
    provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>'
  }
    /*,{provide: LocationStrategy, useClass: HashLocationStrategy}*/],
  bootstrap: [AppComponent]

})
export class AppModule { }
