const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl(projects) {
	'ngInject';
	this.list = projects.filter(state => typeof state.data.client === 'object').map(state => {
		console.log('state', state);
		const years = state.data.interventions.map(n => n.year).sort();
		state.data.client.year = years.join(', ');
		return state.data.client;
	});

	this.mairies = this.list.filter(n => n.type === 'Mairie');
	this.autresEntitesPubliques = this.list.filter(n => n.type === 'Public Autres');
});
