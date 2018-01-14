const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './app/main.js',
		vendors: './app/vendors.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/wpk'),
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true,
						sourceMap: true,
						root: './wpk'
					}
				}]
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true,
						sourceMap: true,
						// root: '../img'
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					}
				}]
			})
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true,
					attrs: [],
					
				}
			}],
		}, {
			// svg included in HTML files
			test: /img.html.*\.svg$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'image/svg+xml',
					publicPath: './wpk/'
				}
			}]
		}, {
			// svg included in CSS files (at least one of the test condition must match)
			test: [/img.css.*\.svg$/, /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/],
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'image/svg+xml',
				}
			}]
		}, {
			test: /\.jpg$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './wpk/',
				}
			}]
		}, {
			test: /\.png$/,
			use: ['url-loader?mimetype=image/png']
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'application/font-woff'
				}
			}]
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					limit: 10000,
					mimetype: 'application/octet-stream'
				}
			}]
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			}]
		}]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin('vendors'),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
		}),
	]
};