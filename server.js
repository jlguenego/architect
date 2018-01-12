'use strict';

const express = require('express');
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

app.use(function (req, res, next) {
	console.log('req.url', req.url);
	next();
});

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));

const urls = ['clients', 'realisations', 'contact', '1234'];
['app', 'dist'].forEach(dir => {
	const array = urls.map(n => `/${dir}/${n}`);
	app.use(array, (req, res, next) => {
		res.sendFile(`./${dir}/index.html`, {
			root: __dirname
		});
	});
});

app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

const port = 8000;
app.listen(port, function () {
	console.log(`server started on port ${port}`);
});