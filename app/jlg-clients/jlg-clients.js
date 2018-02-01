const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl(projects) {
	'ngInject';
	this.list = projects.filter(state => typeof state.data.client === 'object').reduce((acc, state) => {
		console.log('state, acc', state, acc);
		const years = state.data.interventions.map(n => n.year).sort();
		const duplicate = acc.find(client => client.name === state.data.client.name);
		if (duplicate) {
			duplicate.year += ', ' + years.join(', ');
			return acc;
		}
		state.data.client.year = years.join(', ');
		acc.push(state.data.client);
		return acc;
	}, []);

	this.mairies = this.list.filter(n => n.type === 'Mairie');
	this.autresEntitesPubliques = this.list.filter(n => n.type === 'Public Autres');
});
