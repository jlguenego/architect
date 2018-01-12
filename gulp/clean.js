const del = require('del');

module.exports = function(gulp, pathConfig) {
	// Delete the dist directory
	gulp.task('clean:dist', function() {
		return del([pathConfig.dist]);
	});

	gulp.task('clean:wpk', function() {
		return del([pathConfig.wpk]);
	});

	gulp.task('clean', ['clean:dist', 'clean:wpk']);
};
