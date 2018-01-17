import './css/reset.scss';
import './css/layout.scss';
import './css/grid.scss';
import './css/theme.scss';
import './css/table.scss';

import './jlg-parallax/jlg-parallax.js';
import './jlg-menu/jlg-menu.js';
import './jlg-onscreen/jlg-onscreen.js';
import './jlg-route/jlg-route.js';
import './jlg-realisation/jlg-realisation.module.js';
import './jlg-array/jlg-array.js';
import './jlg-social/jlg-social.js';

angular.module('main', [
	'ngSanitize',
	'jlg-parallax',
	'jlg-menu',
	'jlg-onscreen',
	'jlg-route',
	'jlg-array',
	'jlg-realisation',
	'jlg-social',
]);
