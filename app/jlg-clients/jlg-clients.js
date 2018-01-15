const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl() {
	this.list = [{
        name: 'Mairie de Torcy',
        zip: 77200,
        type: 'Mairie',
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        zip: 77200,
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        zip: 77200,
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        zip: 77200,
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'EPAMARNE',
        zip: 77200,
        type: 'CL',        
		year: '2010',
	}, {
        name: 'Marne et Gondoires',
        zip: 77200,
        type: 'CL',        
		year: '2010',
    }];
    
    this.mairies = this.list.filter(n => n.type === 'Mairie');
    this.collectivitesLocales = this.list.filter(n => n.type === 'CL');
});
