/// <binding ProjectOpened='watch' />
"use strict";

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Styles
gulp.task('styles', function () {
    return sass('sass/site.scss', { style: 'expanded' })
      .pipe(autoprefixer('last 2 version'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cssnano())
      .pipe(gulp.dest('wwwroot/css'))
      .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(['wwwroot/js/*.js', 'wwwroot/js/modules/*.js'])
      .pipe(concat('site.js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('wwwroot/js'))
      .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});

gulp.task('watch', function () {
    // Watch .scss files
    gulp.watch('sass/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch(['wwwroot/js/*.js', 'wwwroot/js/modules/*.js'], ['scripts']);
});
