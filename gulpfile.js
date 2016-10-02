'use strict';

var gulp = require('gulp');
var del = require('del');


var path = require('path');


// Load plugins
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream'),

    sourceFile = './app/scripts/app.js',

    destFolder = './dist/scripts',
    destFileName = 'react-questionnaire.js';

  var less = require('gulp-less');


  var babelify = require('babelify');
  var exorcist = require('exorcist');
  var buffer = require('vinyl-buffer');
  var transform = require('vinyl-transform');
  var mapFileName = '/app/scripts/app.js.map';


var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Styles
gulp.task('styles', ['less', 'moveCss']);

gulp.task('moveCss',['clean'], function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(['./app/styles/**/*.css'], { base: './app/styles/' })
  .pipe(gulp.dest('dist/styles'));
});

gulp.task('less', function() {
  return gulp.src('./app/styles/*.less')
              .pipe(less({
              paths: [
              '.',
              './node_modules/bootstrap-less'
              ]
              }))
.pipe(gulp.dest('dist/styles'));
});



var bundler = watchify(browserify({
    entries: [sourceFile],
    debug: true,
    insertGlobals: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}));

  bundler.transform(babelify.configure({
  sourceMapRelative: 'src'
}));

bundler.on('update', rebundle);
bundler.on('log', $.util.log);

  function rebundle() {
      return bundler.bundle()
          // log errors if they happen
          .on('error', $.util.log.bind($.util, 'Browserify Error'))
          .pipe(exorcist(mapFileName))
          .pipe(source(destFileName))
          .pipe(buffer())
          .pipe(gulp.dest(destFolder))
          .on('end', function() {
              reload();
          });
  }
  function bundle(){
    return bundler.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(exorcist(mapFileName))
      .pipe(source(destFileName))
      .pipe(buffer())
      .pipe(gulp.dest(destFolder));
  }

// Scripts
gulp.task('scripts', rebundle);

gulp.task('buildScripts', () => bundle());




// HTML
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// Images
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

// Fonts
gulp.task('fonts', function() {

    return gulp.src(require('main-bower-files')({
            filter: '**/*.{eot,svg,ttf,woff,woff2}'
        }).concat('app/fonts/**/*'))
        .pipe(gulp.dest('dist/fonts'));

});

// Clean
gulp.task('clean', function(cb) {
    $.cache.clearAll();
    cb(del.sync(['dist/styles', 'dist/scripts', 'dist/images']));
});

// Bundle
gulp.task('bundle', ['styles', 'scripts'], function() {
    return gulp.src('./app/*.html')
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('buildBundle', ['styles', 'buildScripts'], function() {
    return gulp.src('./app/*.html')
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});

// Move JS Files and Libraries
// gulp.task('moveLibraries',['clean'], function(){
//   // the base option sets the relative root for the set of files,
//   // preserving the folder structure
//   gulp.src(['./app/scripts/**/*.js' ,'./app/scripts/**/*.js.map'
//   ], { base: './app/scripts/' })
//   .pipe(gulp.dest('dist/scripts'));
// });




gulp.task('json', function() {
    gulp.src('app/configs/questions.json')
        .pipe(gulp.dest('dist/configs/'));
});

// Robots.txt and favicon.ico
gulp.task('extras', function() {
    return gulp.src(['app/*.txt', 'app/*.ico'])
        .pipe(gulp.dest('dist/'))
        .pipe($.size());
});

// Watch
gulp.task('watch', ['html', 'fonts', 'bundle','styles'], function() {

    browserSync({
        notify: false,
        logPrefix: 'BS',
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ['dist', 'app']
    });
    // Watch .json files
    gulp.watch('app/scripts/**/*.json', ['json']);
    // Watch .html files
    gulp.watch('app/*.html', ['html']);
    gulp.watch(['app/styles/**/*.less', 'app/styles/**/*.css'], ['styles', 'scripts', reload]);
    // Watch image files
    gulp.watch('app/images/**/*',['images'], reload);
});

// Build
gulp.task('build', ['html', 'buildBundle', 'images', 'fonts', 'extras'], function() {
    // gulp.src('dist/scripts/app.js')
        // .pipe($.uglify())
        // .pipe($.stripDebug())
        // .pipe(gulp.dest('dist/scripts'));
});

// Default task
gulp.task('default', ['clean', 'build'  , 'jest'  ]);


gulp.task('results-watch',['results-build'],function(){
  browserSync({
      notify: false,
      logPrefix: 'BS',
      server: ['results'],
      open: false
  });
  gulp.watch('results/scripts/ui-lib/*.js', ['results-build']);
  gulp.watch('results/scripts/app.js', ['results-build']);
  gulp.watch('results/styles/**/*.less', ['results-build']);
});
gulp.task('results-build',function(){
  gulp.src('./results/styles/*.less')
              .pipe(less({
              paths: [
              '.',
              './node_modules/bootstrap-less'
              ]
              }))
  .pipe(gulp.dest('results/styles'));
  browserify('./results/scripts/app.js')
  .bundle()
  .on('error', $.util.log.bind($.util, 'Browserify Error'))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./results/scripts/'));

});
