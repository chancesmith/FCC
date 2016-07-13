"use strict";

var gulp = require('gulp'),    
    less = require('gulp-less'),
    path = require('path'),
    plumber = require('gulp-plumber'); //prevent breaks in watchs when errors occur

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css/')); //change path for output
});

gulp.task('watch', function() {
  return gulp.watch('*/**/**.less', ['less']);
});

gulp.task('default', ['less','watch']);