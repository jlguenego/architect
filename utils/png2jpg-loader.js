const jimp = require('jimp');

module.exports = function(content) {
    this.cacheable();
    const callback = this.async();
    if(!callback) return content;

    const input = this.resourcePath;
    
	jimp.read(input).then((image) => {
		image.quality(60) // set JPEG quality
            .getBuffer(jimp.MIME_JPEG, (...args) => {
                callback(undefined, args[1]);
            });
	}).catch((err) => {
        console.error('dany error', err);
        callback(undefined, content);
	});
	
};

module.exports.raw = true;
