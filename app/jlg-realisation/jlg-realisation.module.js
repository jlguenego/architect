import './jlg-realisation.scss';

import projectHtml from './tmpl/project.html';
import './tmpl/project.scss';

import { jlgThumbnail } from './jlg-thumbnail.component.js';
import { realisationRoute } from './realisation.route.js';
import { categoryRoute } from './category.route.js';



const app = angular.module('jlg-realisation', ['ui.router']);

app.value('projects', []);

function getName(path) {
	return path.split(/[\\/]/).pop().replace(/\..*$/, '');
}

function getType(path) {
	const a = path.split(/[\\/]/);
	a.pop();
	a.pop();
	const result = a.pop();
	return result;
}

const context = require.context('./project', true, /\.js$/);
context.keys().forEach(function(key) {
	const obj = context(key);
	const state = obj.state;
	if (state.disabled) {
		return;
	}
	state.name = state.name || getName(key);
	state.type = state.type || getType(key);
	state.url = `/realisations/${state.type}/${state.name}`;
	state.template = state.template || projectHtml;
	state.controller = state.controller || function($state) {
		'ngInject';
		this.data = $state.$current.data;
	};
	state.controllerAs = state.controllerAs || '$ctrl';

	state.data.image.portraitMain = state.data.image.portraitMain || state.data.image.main;
	state.data.image.thumbnail = state.data.image.thumbnail || `thumbnail-${getName(key)}`;

	app.config(($stateProvider) => {
		'ngInject';
		$stateProvider.state(state);
	});

	app.run((projects) => {
		'ngInject';
		projects.push(obj.state);
	});
});

app.component('jlgThumbnail', jlgThumbnail);
app.component('realisationRoute', realisationRoute);
app.component('categoryRoute', categoryRoute);

app.config(($stateProvider) => {
	$stateProvider.state({
		name: 'realisations',
		url: '/realisations',
		component: 'realisationRoute',
		data: {
			title: `Nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUÉNÉGO : Liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
			image: {
				main: 'img/photo/ferrieres-landscape.jpg'
			}
		},
	});
	$stateProvider.state({
		name: 'realisations:client',
		url: '/realisations/client/{client}',
		component: 'realisationRoute',
		data: {
			title: `Nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUÉNÉGO : Liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
			image: {
				main: 'img/photo/ferrieres-landscape.jpg'
			}
		},
	});

	$stateProvider.state({
		name: 'realisations:category',
		url: '/realisations/{category}',
		component: 'categoryRoute',
		data: {
			title: `Nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUÉNÉGO : Liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
			image: {
				main: 'img/photo/ferrieres-landscape.jpg'
			}
		},

	});
});
