import fbShareHtml from './jlg-facebook-share.html';
import './jlg-facebook-share.scss';

const app = angular.module('jlg-social', []);

app.component('jlgFacebookShare', {
	template: fbShareHtml,
	controller: function JLGFacebookShareCtrl($element) {
		this.share = (event) => {
			const url = window.location.href;
			const x = window.screen.width / 4;
			const y = window.screen.height / 4;
			window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,
				'', `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600,top=${y},left=${x}`);
		};
	}
});
