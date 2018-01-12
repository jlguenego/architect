import './jlg-onscreen.scss';

const app = angular.module('jlg-onscreen', []);

app.directive('jlgOnscreen', function () {
	return {
		scope: {
			jlgOnscreen: '@',
		},
		controller: function JLGOnscreenCtrl($scope, $element) {
			console.log('onscreen', $scope);
			this.firstTime = true;

			this.check = function() {
				const wh = window.innerHeight;
				const rect = $element[0].getBoundingClientRect();
	
				const isVisible = rect.bottom >= 0 && rect.top <= wh;
	
				if (isVisible){
					$element.addClass($scope.jlgOnscreen);
					if (this.firstTime) {
						this.firstTime = false;
						$element.addClass('first-time');
					}
				} else {
					$element.removeClass($scope.jlgOnscreen);
					$element.removeClass('first-time');
				}
			}

			window.document.addEventListener('touchmove', () => {
				this.check();
			});
	
			// for browsers
			window.document.addEventListener('scroll', () => {
				this.check();
			});
			this.check();
			
		}
	};
});