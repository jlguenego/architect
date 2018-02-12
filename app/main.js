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
import './jlg-layout/jlg-layout.js';
import './jlg-photo-thumbnail/jlg-photo-thumbnail.js';
import './jlg-category-thumbnail/jlg-category-thumbnail.js';
import './jlg-misc/jlg-misc.js';
import './jlg-category/jlg-category.js';

angular.module('main', [
	'ngSanitize',
	'jlg-parallax',
	'jlg-menu',
	'jlg-onscreen',
	'jlg-route',
	'jlg-array',
	'jlg-realisation',
	'jlg-social',
	'jlg-layout',
	'jlg-photo-thumbnail',
	'jlg-category-thumbnail',
	'jlg-misc',
	'jlg-category',
]);
