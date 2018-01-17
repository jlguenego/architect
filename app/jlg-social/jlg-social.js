import fbShareHtml from './jlg-facebook-share.html';
import './jlg-facebook-share.scss';

const app = angular.module('jlg-social', []);

app.component('jlgFacebookShare', {
	controller: function JLGFacebookShareCtrl($element) {
		this.url = window.location.href;
		const html = fbShareHtml.replace(/URL/, this.url);
		$element.html(html);
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
});
