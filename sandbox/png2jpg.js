const jimp = require('jimp');
const path = require('path');

const input = path.resolve(__dirname, '../spritesmith_modules/sprite.png');
const output = path.resolve(__dirname, '../spritesmith_modules/sprite.jpg');

jimp.read(input).then(function(image) {
	image.quality(60) // set JPEG quality
		.write(output); // save
}).catch(function(err) {
	console.error(err);
});
