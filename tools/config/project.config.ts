import { ExtendPackages } from './seed.config.interfaces';
import { SeedConfig } from './seed.config';
import { join } from 'path';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export const FONT_AWESOME_SRC = 'node_modules/font-awesome/';
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  CSS_IMAGE_DEST = `${this.CSS_DEST}/images`;
  CSS_IMAGE_SRC = [''];
  THEME_FONTS_DEST = `${this.APP_DEST}/css/fonts`;
  THEME_FONTS_SRC = [ '' ];
  constructor() {
    super();

    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'lodash/lodash.min.js', inject: 'libs' },
      { src: 'tether/dist/js/tether.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'metismenu/dist/metisMenu.min.js', inject: 'libs' },
      { src: 'jquery-slimscroll/jquery.slimscroll.min.js',inject: 'libs'},
      { src: 'hammerjs/hammer.min.js', inject: 'libs' }
      // { src: 'metismenu/dist/metisMenu.min.css', inject: true},
      //  { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
      //  { src: 'tether/dist/css/tether.min.css', inject: true },
      //{ src: 'font-awesome/css/font-awesome.css', inject: true }
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      { src: `${this.APP_SRC}/vendor/pace/pace.min.js`, inject: 'libs', vendor: true },
      // {src: `${this.CSS_SRC}/material.scss`, inject: true, vendor: true}
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
    ];
    // *towards the bottom, replace extended packages with this:

    let additionalPackages: ExtendPackages[] = [
      // required for dev build
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
        name : '@ngx-translate/core',
        path : 'node_modules/@ngx-translate/core/bundles/core.umd.js'
      },
      {
        name : '@ngx-translate/core/*',
        path : 'node_modules/@ngx-translate/core/bundles/core.umd.js'
      },
      {
        name : '@ngx-translate/http-loader',
        path : 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js'
      },
      {
        name : '@ngx-translate/http-loader/*',
        path : 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js'
      },
      // mandatory dependency for ng2-bootstrap datepicker
      {
        name: 'moment',
        path: 'node_modules/moment',
        packageMeta: {
          main: 'moment.js',
          defaultExtension: 'js'
        }
      }
    ];
    this.addPackagesBundles(additionalPackages);




    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add proxy middlewar */
    this.PROXY_MIDDLEWARE = [
      // require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
      require('http-proxy-middleware')('/api', {
        target: `${this.BACKEND_HOST}`,
        changeOrigin: false,
        logLevel: 'debug'
      })
    ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };


  }

}
