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
var uglify = require('gulp-uglify');
var jspm = require('gulp-jspm-build');

gulp.task('build-release', function() {
	var options = {
			"rootDir": "src/",
			"sourceMap": false,
			"target": "es5",
			"module": "amd",
			"declaration": true,
			"noImplicitAny": false,
			"noResolve": true,
			"removeComments": false,
			"noLib": false,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"out": "dist/orgchart.svg.js"
	};
	var releaseCompiler = typescript.create(options);

	return gulp.src(
		paths.dtsSrc.concat(paths.source)
			.concat('!src/demo.*') // ignore demo files in processing pipe
		)
		.pipe(releaseCompiler())

		// rename orgchart.svg.d.ts -> index.d.ts
		.pipe(rename(function (path) {
			if (path.basename.endsWith('.d') && path.extname === '.ts') {
				path.basename = 'index.d';
			}
			return path;
		}))
		.pipe(gulp.dest("dist"));
});

gulp.task('build-release-for-sfx', ['clean'], function() {
	var options = {
		"rootDir": "src/",
		"sourceMap": false,
		"target": "es5",
		"module": "amd",
		"declaration": false,
		"noImplicitAny": false,
		"noResolve": true,
		"removeComments": true,
		"noLib": false,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true
	};
	var releaseCompiler = typescript.create(options);

	return gulp.src(
		paths.dtsSrc.concat(paths.source)
			.concat('!src/demo.*') // ignore demo files in processing pipe
		)
		.pipe(releaseCompiler())
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-release-sfx', ['build-release-for-sfx'], function() {

	return jspm({
			//bundleSfx: true, // self executable bundle
			bundles: [
				{ src: 'orgchart.svg.js', dst: 'orgchart.svg.bundle.js' }
			]
		})
		.pipe(gulp.dest("dist"));
});



gulp.task('release', function(callback) {
	return runSequence(
		'clean-release',
		'build-release',
		'build',
		'build-release-sfx',
		callback
	);
});
