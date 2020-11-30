const gulp = require("gulp");
const clean = require("gulp-clean-css");



// Gulp task to minify CSS files
gulp.task('minify-css', () => {
    return gulp.src('./assets/dropdown/css/style.css')
      .pipe(clean({compatibility: 'ie8'}))
      .pipe(gulp.dest('./public/css'));
  });