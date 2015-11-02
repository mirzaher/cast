var gulp = require('gulp');

gulp.task( 'admin', function () {
    require('./gulp/admin/admin.js')();
} );

gulp.task( 'public', function () {
    require('./gulp/public/main.js')();
} );

gulp.task( 'default',['admin','public']);
	