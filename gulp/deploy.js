const runSequence = require('run-sequence');
const replace = require('gulp-replace');
const gutil = require('gulp-util');
const ftp = require('gulp-ftp');

const cfgUtils = require('../cfg/utils.js');

module.exports = function(gulp, pathConfig) {

	gulp.task('deploy:config', function(cb) {
		const deployEnv = cfgUtils.getEnv('deploy');
		console.log(deployEnv.base);		
		return gulp.src(pathConfig.indexHtml, { base: pathConfig.base })
			.pipe(replace(/\/app\//, `${deployEnv.base}`))
			.pipe(gulp.dest(pathConfig.dist));

	});

	gulp.task('deploy:ftp', function() {
		const deployEnv = cfgUtils.getEnv('deploy');
		return gulp.src(pathConfig.ftp)
			.pipe(ftp(deployEnv.ftp))
			.pipe(gutil.noop());
	});

	gulp.task('deploy', [], function() {
		runSequence('deploy:config', 'deploy:ftp');
	});
};
