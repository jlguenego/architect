module.exports = function mySpriteTemplate(data) {
	const result = data.sprites.map(function(sprite) {
		const totalX = sprite.total_width / sprite.width;
		const totalY = sprite.total_height / sprite.height;
		const x = sprite.x / sprite.width;
		const y = sprite.y / sprite.height;
		return `
.${sprite.name} {
	background-position: ${x/(totalX-1)*100}% ${y/(totalY-1)*100}%;
	background-size: ${(sprite.total_width / sprite.width)*100}% ${(sprite.total_height / sprite.height)*100}%;
	background-image: url(${sprite.image});
}`;
	}).join('\n');

	return result;
};
