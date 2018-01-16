const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const fs = require('fs');



function mySpriteTemplate(data) {
	if (fs.existsSync(path.resolve(__dirname, 'spritesmith_modules/sprite.png'))) {
		console.log('file exists !!!');
	} else {
		console.log('file DO NOT exists !!!');
	}
	const result = data.sprites.map(function(sprite) {
		const totalX = sprite.total_width / sprite.width;
		const totalY = sprite.total_height / sprite.height;
		const x = sprite.x / sprite.width;
		const y = sprite.y / sprite.height;
		return `
.${sprite.name} {
	display: block; 
	width: 100%; 
	height: 100%; 
	background-position: ${x/(totalX-1)*100}% ${y/(totalY-1)*100}%;
	background-size: ${(sprite.total_width / sprite.width)*100}% ${(sprite.total_height / sprite.height)*100}%;
	background-image: url(${sprite.image});
}`;
	});

	return result;
}

module.exports = {
	entry: {
		bundle: './app/main.js',
		vendors: './app/vendors.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/wpk'),
	},
	resolve: {
		modules: ['node_modules', 'spritesmith_modules']
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
						minimize: false,
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
			exclude: /sprite.(png|jpg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './wpk/',
				}
			}]
		}, {
			test: /sprite.(png|jpg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			}]
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
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'app/img/photo/project'),
				glob: './**/thumbnail-*.jpg'
			},
			target: {
				image: path.resolve(__dirname, 'spritesmith_modules/sprite.png'),
				css: [
					[path.resolve(__dirname, 'spritesmith_modules/sprite.scss'), {
						format: 'mySpriteTemplate'
					}]
				]
			},
			apiOptions: {
				// the tilde means a module for webpack css import.
				cssImageRef: '~sprite.png'
			},
			customTemplates: {
				'mySpriteTemplate': mySpriteTemplate,
			},
		})
	],
	// let webpack access to the filename.
	context: __dirname,
	node: {
		__filename: true
	}
};
