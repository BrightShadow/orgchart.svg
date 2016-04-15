var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: 'local',
    port: 9000,
    notify: false,
    server: {
      baseDir: ['./demo'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
