var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyHtml = require("gulp-minify-html");

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./server/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./client/public/javascript/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/client/public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/client/public/js'));
});


gulp.task('minify-html', function () {
    gulp.src('./client/public/static_pages/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/client/public/static_pages'));
});

//gulp.task('default', ['lint', 'watch']);
gulp.task('default', ['lint']);