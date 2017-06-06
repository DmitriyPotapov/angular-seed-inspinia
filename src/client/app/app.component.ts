import './operators';

import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { correctHeight, detectBody, smoothlyMenu } from './app.helpers';

import { AuthService } from './services/index';
import { Config } from './shared/config/env.config';
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
export class AppComponent implements AfterViewInit, OnInit {
  isLoggedIn: boolean = false;
  constructor(public translate: TranslateService,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    // router.navigate(['/vendor']);
    console.log('Environment config', Config);
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  ngOnInit() {
    console.debug(this.router.url);
    // this.isLoggedIn = this.auth.loggedIn();
    this.isLoggedIn = true;
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
    //for remove sidebar uncomment this
    // jQuery('body').addClass('mini-navbar');
    // jQuery('#toogleNavigation').remove();
    
  }
  isBlankLayout(): boolean {
    return this.router.url.indexOf('login') > -1 || this.router.url.indexOf('register') > -1;
  }
}
