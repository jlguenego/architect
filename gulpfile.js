const gulp = require('gulp');

const pathConfig = {
	base: 'app',
	dist: 'dist',
	zip: 'dist.zip',
	wpk: 'app/wpk',
	indexHtml: 'app/**/index.html',
	htaccess: ['app/**/.htaccess'],
	resources: ['app/img/**/*', 'app/wpk/**/*'],
	ftp: ['dist/**/**', 'dist/**/.htaccess'],
	// ftp: ['dist/**/index.html', 'dist/.htaccess'],
};

require('./gulp/eslint.js')(gulp);
require('./gulp/clean.js')(gulp, pathConfig);
require('./gulp/build.js')(gulp, pathConfig);
require('./gulp/deploy.js')(gulp, pathConfig);

gulp.task('default', ['rebuild']);
