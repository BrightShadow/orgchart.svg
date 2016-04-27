var gulp = require('gulp');
var jspm = require('gulp-jspm-build');

gulp.task('release', ['build'], function() {
	jspm({
		bundleOptions: {
			minify: true,
			mangle: true
		},
		bundles: [
			{
				src: './config.debug.options + node.options + org.chart.config + orgchart.node + orghcart.connector.options ' +
				'tip.over.options + orgchart.level.node + orgchart.level.info  + org.chart.events + orgchart.svg + snapsvg + snap.svg.zpd',
				dst: 'app.js'
			}
		],
		configOverride: {
			baseURL: '/demo'
		}
	})
		.pipe(gulp.dest('.dist'));
});
