/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The browser platform with a compiler

// Load i18n providers
// import { TranslationProviders } from './i18n.providers';

// The app module
if (String('<%= BUILD_TYPE %>') === 'prod') { enableProdMode(); }

// Compile and launch the module with i18n providers
// let TP = new TranslationProviders();
// TP.getTranslationFile().then((providers: any) => {
// const options: any = { providers };
platformBrowserDynamic().bootstrapModule(AppModule/*, options*/);
// });
