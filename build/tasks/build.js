var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var typescript = require('gulp-tsb');
var rename = require('gulp-rename');

var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-js', ['copy-demo-files'], function() {
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.create(require('../../tsconfig.json').compilerOptions);
  }
  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('copy-demo-files', function() {
	return gulp.src(paths.demoSrc)
		.pipe(rename('index.html'))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-js'],
    callback
  );
});
