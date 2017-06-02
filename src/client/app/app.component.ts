import './operators';

import { AfterViewInit, Component } from '@angular/core';
import { correctHeight, detectBody } from './app.helpers';

import { Config } from './shared/config/env.config';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var jQuery: any;
/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(public translate: TranslateService, router: Router) {
    router.navigate(['/home']);
    console.log('Environment config', Config);
    translate.addLangs(['en','ru']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind('load resize', function () {
      correctHeight();
      detectBody();
    });
    jQuery(document).ready(function () {
      correctHeight();
      detectBody();
    });
  }
}
