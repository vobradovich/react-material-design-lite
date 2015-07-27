'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var ts = require('gulp-typescript');
var babel = require("gulp-babel");
var $ = require('gulp-load-plugins')();

gulp.task('default', ['jsx-js', 'tsx-jsx'], function (cb) {
  return cb;
});

// JSX
gulp.task("jsx-js", function () {  
  return gulp.src(["jsx/**/*.jsx"])
    .pipe($.sourcemaps.init())
    .pipe($.concat("react-material.js"))
    .pipe(babel({ stage: 0 }))
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

// TSX
gulp.task("tsx-jsx", function () {
  var tsResult = gulp.src('tsx/**/*.tsx')
    .pipe(ts({
      typescript: require('typescript'),
      "target": "es6",
      "jsx": "preserve"
    }));
  return tsResult.js.pipe(gulp.dest('dist/jsx'));  
});

// TSX
gulp.task("tsx-js", function () {
  var tsResult = gulp.src('tsx/**/*.tsx')
    .pipe($.sourcemaps.init())
    .pipe($.concat("react-material-tsx.tsx"))
    .pipe(ts({
      typescript: require('typescript'),
      "target": "es5",
      "jsx": "react"
    }));
  return tsResult.js
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest('dist'));  
});

