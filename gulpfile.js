'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {

  gulp.src('./public/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('sass:watch', function() {

  gulp.watch('./public/**/*.scss', ['sass']);

});
