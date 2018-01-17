const jimp = require('jimp');

module.exports = function(content) {
    console.log('png2jpg-loader', this.resourcePath);
    
    this.cacheable();
    const callback = this.async();
    if(!callback) return content;

    const input = this.resourcePath;
    

	jimp.read(input).then((image) => {
        console.log('image', image);
		image.quality(60) // set JPEG quality
            .getBuffer(jimp.MIME_JPEG, (...args) => {
                console.log('args', args);
                callback(undefined, args[1]);
            });
	}).catch((err) => {
        console.error('dany error', err);
        callback(undefined, content);
	});
	
};

module.exports.raw = true;
