var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    html2js    = require('gulp-ng-html2js'),
    concat     = require('gulp-concat'),
    uglify     = require("gulp-uglify"),
    rename     = require("gulp-rename"),
    jshint     = require('gulp-jshint'),
    serve      = require('gulp-serve'),
    livereload = require('gulp-livereload'),
    lr         = require('tiny-lr'),
    server     = lr();

var paths = {
  js:   'src/**/*.js',
  html: 'src/angular-inputex/directives/templates/*.html',
  i18n: 'src/angular-inputex/i18n/*_*.json',
  dist: 'dist'
};

gulp.task('build-js', function() {
  gulp.src(paths.js)
    // lint
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    // concat
    .pipe(concat('angular-inputex.js'))
    .pipe(gulp.dest(paths.dist))
    // uglify
    .pipe(uglify())
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest(paths.dist))
    // livereload
    .pipe(livereload(server));
});

gulp.task('build-html', function() {
  gulp.src(paths.html)
    .pipe(html2js({
      moduleName: 'ix.templates',
      prefix: 'angular-inputex/directives/templates/'
    }))
    .pipe(concat('angular-inputex-templates.js'))
    .pipe(gulp.dest(paths.dist))
    // uglify
    .pipe(uglify())
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest(paths.dist))
    // livereload
    .pipe(livereload(server));
});

gulp.task('build-i18n', function() {
  gulp.src(paths.i18n)
    .pipe(rename({prefix: 'angular-inputex-'}))
    .pipe(gulp.dest(paths.dist))
    // uglify
    // .pipe(uglify())
    // .pipe(rename({suffix: '-min'}))
    // .pipe(gulp.dest(paths.dist))
    // livereload
    .pipe(livereload(server));
});

gulp.task('listen', function(next) {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    next();
  });
});

gulp.task('watch', ['build-js', 'build-html', 'build-i18n'], function () {
  gulp.watch(paths.js,   ['build-js']);
  gulp.watch(paths.html, ['build-html']);
  gulp.watch(paths.i18n, ['build-i18n']);
});

gulp.task('serve', ['watch'], serve('demo'));

gulp.task('default', ['build-html', 'build-i18n', 'build-js']);
