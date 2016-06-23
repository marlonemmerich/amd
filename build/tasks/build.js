import gulp from 'gulp';
import minCss from 'gulp-minify-css';
import * as constantes from '../constantes';

gulp.task('build-bs-v3', ['del-dist-bs-v3'], () => {
  const CSS = constantes.bootstrap.v3.css;
  const DIST = constantes.bootstrap.v3.dist;

  return gulp.src(CSS)
             .pipe(minCss())
             .pipe(gulp.dest(DIST));
});
