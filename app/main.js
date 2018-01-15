import './css/reset.scss';
import './css/layout.scss';
import './css/grid.scss';
import './css/theme.scss';
import './css/table.scss';

import './jlg-parallax/jlg-parallax.js';
import './jlg-menu/jlg-menu.js';
import './jlg-onscreen/jlg-onscreen.js';
import './jlg-route/jlg-route.js';
import './jlg-realisation/jlg-realisation.js';


angular.module('main', ['ngSanitize', 'jlg-parallax', 'jlg-menu', 'jlg-onscreen', 'jlg-route', 'jlg-realisation']);