import './jlg-parallax.scss';

import '../jlg-load-image/jlg-load-image.js';

const app = angular.module('jlg-parallax', ['jlg-load-image']);

app.component('jlgParallax', {
	bindings: {
		landscape: '<',
		portrait: '<',
	},
	controller: function JLGParallaxCtrl($scope, $element, $q, $compile, $document, $timeout, loadImage) {
		'ngInject';
		this.$onInit = () => {
			const html = `<img src="">`;
			$element.html(html);
			this.img = $element[0].querySelector('img');
			$q.all([
				loadImage.load(this.landscape),
				loadImage.load(this.portrait),
			]).then(images => {
				$element.addClass('loaded');
				this.images = {
					landscape: images[0],
					portrait: images[1],
				};
				// On ios the rendering and painting are slow.
				// The image height cannot be obtained as expected.

				if (navigator.userAgent.match(/Safari/)) {
					setTimeout(() => {
						this.render();
					}, 20);
				} else {
					this.render();
				}
			});

		};



		window.document.addEventListener('touchmove', () => {
			this.render();
		});
		
		window.document.addEventListener('onresize', () => {
			this.render();
		});

		// for browsers
		window.document.addEventListener('scroll', () => {
			this.render();
		});

		this.render = () => {
			if (this.images === undefined) {
				return;
			}

			const wh = window.innerHeight;
			const ww = window.innerWidth;
			const wratio = ww / wh;

			const rect = $element[0].getBoundingClientRect();

			const isVisible = rect.bottom >= 0 && rect.top <= wh;

			let ratio;

			const setOpacity = (mode) => {
				this.img.style.animation = 'fadein 2s forwards';
			};
			
			if (wh < ww) {
				// landscape
				if (this.img.src.indexOf(this.images.landscape.url) < 0) {
					this.img.onload = setOpacity;
					this.img.src = this.images.landscape.url;
				} else {
					setOpacity('immediate');
				}
				ratio = this.images.landscape.width / this.images.landscape.height;
			} else {
				// portrait
				if (this.img.src.indexOf(this.images.portrait.url) < 0) {
					this.img.onload = setOpacity;
					this.img.src = this.images.portrait.url;
				} else {
					setOpacity('immediate');
				}
				ratio = this.images.portrait.width / this.images.portrait.height;
			}

			if (ratio < wratio) {
				this.img.style.width = '100vw';
				this.img.style.height = 'auto';
			} else {
				this.img.style.width = 'auto';
				this.img.style.height = '100vh';
			}

			if (!isVisible) {
				this.img.style.animation = 'fadeout 0s forwards';
				return;
			}

			
		};
	}
});