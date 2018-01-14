import './jlg-realisation.scss';
import html from './jlg-thumbnail.html';

const app = angular.module('jlg-realisation', []);

app.component('jlgThumbnail', {
	bindings: {
		href: '<',
		src: '<',
		caption: '<',
	},
	template: html,
	controller: function() {
        console.log('jlg-thumbnail');
        this.$onInit = () => {
            console.log('jlg-thumbnail constructor', this.title);
        };
    },
});
