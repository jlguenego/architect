const replace = require('gulp-replace');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const runSequence = require('run-sequence');
const gutil = require('gulp-util');


module.exports = function(gulp, pathConfig) {
	gulp.task('build:webpack', function(callback) {
		webpack(webpackConfig, function(err, stats) {
			if (err) {
				throw new gutil.PluginError('webpack', err);
			}
			callback();
		});
	});

	gulp.task('build:resources', function() {
		return gulp.src(pathConfig.resources, { base: pathConfig.base })
			.pipe(gulp.dest(pathConfig.dist));
	});

	gulp.task('build:html', function() {
		return gulp.src(pathConfig.indexHtml, { base: pathConfig.base })
			.pipe(replace(/\/app\//, '/dist/'))
			.pipe(gulp.dest(pathConfig.dist));
	});

	gulp.task('build:htaccess', function() {
		return gulp.src(pathConfig.htaccess, { base: pathConfig.base })
			.pipe(gulp.dest(pathConfig.dist));
	});

	gulp.task('build', function() {
		runSequence('build:webpack', ['build:resources', 'build:html', 'build:htaccess']);
	});

	gulp.task('rebuild', function() {
		runSequence('clean', 'build');
	});
};
