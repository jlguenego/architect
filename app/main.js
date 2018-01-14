import './css/reset.scss';
import './css/layout.scss';
import './css/grid.scss';
import './css/theme.scss';
import './css/photo-gallery.scss';

import './jlg-parallax/jlg-parallax.js';
import './jlg-menu/jlg-menu.js';
import './jlg-onscreen/jlg-onscreen.js';
import './jlg-route/jlg-route.js';


angular.module('main', ['jlg-parallax', 'jlg-menu', 'jlg-onscreen', 'jlg-route']);
