const app = angular.module('jlg-array', []);

app.filter('join', function() {
	return function(array, separator) {
		separator = separator || ', ';
		if (!array) {
			return '';
		}
		return array.join(separator);
	};
});
