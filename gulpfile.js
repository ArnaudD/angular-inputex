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
  dist: 'dist'
};

gulp.task('build', function() {
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

gulp.task('templates', function() {
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

gulp.task('listen', function(next) {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    next();
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.js,   ['build']);
  gulp.watch(paths.html, ['templates']);
});

gulp.task('serve', ['watch'], serve('demo'));

gulp.task('default', ['templates', 'build']);
