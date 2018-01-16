import './jlg-realisation.scss';

import { jlgThumbnail } from './jlg-thumbnail.component.js';
import { realisationRoute } from './realisation.route.js';



const app = angular.module('jlg-realisation', ['ui.router']);

app.value('projects', []);



const context = require.context('./project', true, /\.js$/);
context.keys().forEach(function(key) {
	const obj = context(key);
	const state = obj.state;
	if (state.disabled) {
		return;
	}
	app.config(($stateProvider) => {
		'ngInject';
		
		state.url = `/realisations/${state.name}`;
		$stateProvider.state(state);
	});

	app.run((projects) => {
		'ngInject';
		projects.push(obj.state);
	});
});

app.component('jlgThumbnail', jlgThumbnail);
app.component('realisationRoute', realisationRoute);

app.config(($stateProvider) => {
	$stateProvider.state({
		name: 'realisations',
		url: '/realisations',
		component: 'realisationRoute',
		data: {
			title: `Nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUENEGO: liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Lavoir, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
		}
	});
});
