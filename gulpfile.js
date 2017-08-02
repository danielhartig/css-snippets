'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
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