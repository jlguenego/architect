const app = angular.module('jlg-layout', []);

app.run(($rootScope) => {
	const render = () => {
		const top = document.body.scrollTop;
		const header = document.querySelector('header');
		if (top < 0) {
			header.style.position = 'fixed';
		} else {
			header.style.position = null;
		}
	}
	document.addEventListener('touchmove', render);
	document.addEventListener('scroll', render);
});
