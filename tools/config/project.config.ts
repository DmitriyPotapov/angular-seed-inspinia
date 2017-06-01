import { ExtendPackages } from './seed.config.interfaces';
import { SeedConfig } from './seed.config';
import { join } from 'path';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {
  FONT_AWESOME_SRC = 'node_modules/font-awesome/';
  BOOTSTRAP_SRC = 'node_modules/bootstrap/dist/';
  FONTS_DEST = `${this.APP_DEST}`;
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  constructor() {
    super();
    this.ENABLE_SCSS = false;
    this.APP_TITLE = 'Angular app';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';
    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      /* Select a pre-built Material theme in this line*/
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'animate.css/animate.min.css', inject: true },
      { src: 'metismenu/dist/metisMenu.min.css', inject: true },
      { src: 'tether/dist/css/tether.min.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'ngx-toastr/toastr.css', inject: true },
      { src: '@angular/material/prebuilt-themes/indigo-pink.css', inject: true },
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'lodash/lodash.min.js', inject: 'libs' },
      { src: 'tether/dist/js/tether.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'metismenu/dist/metisMenu.min.js', inject: 'libs' },
      { src: 'jquery-slimscroll/jquery.slimscroll.min.js', inject: 'libs' },
      { src: 'hammerjs/hammer.min.js', inject: 'libs' }
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      // { src: '${this.CSS_SRC}/inspinia.css', inject: true, vendor: true }
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add additional packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      {
        name: 'angular2-jwt',
        path: 'node_modules/angular2-jwt/angular2-jwt.js',
      },
      {
        name: 'ng2-bootstrap',
        path: 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'
      },

      // required for prod build
      {
        name: 'ng2-bootstrap/*',
        path: 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'

      },
      //required for dev build
      {
        name: 'ngx-toastr',
        path: 'node_modules/ngx-toastr/toastr.umd.js'
      },
      // required for prod build
      {
        name: 'ngx-toastr/*',
        path: 'node_modules/ngx-toastr/toastr.umd.js'
      },
      //required for dev build
      {
        name: 'traceur',
        path: 'node_modules/traceur/bin/traceur.js'
      },
      // required for prod build
      {
        name: 'traceur/*',
        path: 'node_modules/traceur/bin/traceur.js'
      },
      {
        name: '@ngx-translate/core',
        path: 'node_modules/@ngx-translate/core/bundles/core.umd.js'
      },
      {
        name: '@ngx-translate/core/*',
        path: 'node_modules/@ngx-translate/core/bundles/core.umd.js'
      },
      {
        name: '@ngx-translate/http-loader',
        path: 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js'
      },
      {
        name: '@ngx-translate/http-loader/*',
        path: 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js'
      },
      // mandatory dependency for ng2-bootstrap datepicker
      {
        name: 'moment',
        path: 'node_modules/moment',
        packageMeta: {
          main: 'moment.js',
          defaultExtension: 'js'
        }
      },
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js',
        packageMeta: {
          defaultExtension: 'js'
        }
      }];

    this.addPackagesBundles(additionalPackages);

    this.PROXY_MIDDLEWARE = [
      // require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
      require('http-proxy-middleware')('/api', {
        target: `${'gogole.com'}`,
        changeOrigin: false,
        logLevel: 'debug'
      })
    ];
    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
