'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'))
    .pipe(reload({ stream:true }));
});
 
gulp.task('serve', ['sass'], function () {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['serve']);