import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

// App views
import { MainViewModule } from './views/main-view/main-view.module';
import { MinorViewModule } from './views/minor-view/minor-view.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';

// App modules/components
import { LayoutsModule } from './components/common/layouts/layouts.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,
    LayoutsModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' }
    /*,{provide: LocationStrategy, useClass: HashLocationStrategy}*/],
  bootstrap: [AppComponent]

})
export class AppModule { }
