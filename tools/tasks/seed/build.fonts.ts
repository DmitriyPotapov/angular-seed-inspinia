import * as gulp from 'gulp';
import { join } from 'path';
import Config from '../../config';
/*import {APP_DEST} from '../config';
import {BOOTSTRAP_SRC, FONT_AWESOME_SRC} from '../config';*/
export = function BuildFonts() {
  return function () {
    return gulp.src([
        join(Config.BOOTSTRAP_SRC, '**/*.eot'),
        join(Config.BOOTSTRAP_SRC, '**/*.ijmap'),
        join(Config.BOOTSTRAP_SRC, '**/*.ttf'),
        join(Config.BOOTSTRAP_SRC, '**/*.woff'),
        join(Config.BOOTSTRAP_SRC, '**/*.woff2'),
        join(Config.FONT_AWESOME_SRC, '**/*.eot'),
        join(Config.FONT_AWESOME_SRC, '**/*.ijmap'),
        join(Config.FONT_AWESOME_SRC, '**/*.ttf'),
        join(Config.FONT_AWESOME_SRC, '**/*.woff'),
        join(Config.FONT_AWESOME_SRC, '**/*.woff2')
      ])
      .pipe(gulp.dest(Config.APP_DEST));
  };
}