import html from './tmpl/jlg-thumbnail.html';


export const jlgThumbnail = {
	bindings: {
		href: '<',
		src: '<',
		caption: '<',
	},
	template: html,
	controller: function() {
		this.$onInit = () => {
		};
	},
};
