const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl(projects, misc) {
	'ngInject';
	this.clients = projects.filter(state => typeof state.data.client === 'object').reduce((acc, state) => {
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

	this.clients.forEach(client => {
		client.slug = misc.toSlug(client.name);
	});

	this.mairies = this.clients.filter(n => n.type === 'Mairie');
	this.autresEntitesPubliques = this.clients.filter(n => n.type === 'Public Autres');
});
