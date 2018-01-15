const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl() {
	this.list = [{
        name: 'Mairie de Torcy',
        type: 'Mairie',
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        type: 'Mairie',        
		year: '2010',
	}, {
        name: 'Mairie de Bussy-Saint-Martin',
        type: 'Mairie',        
		year: '2010',
    }];
    
    this.mairies = this.list.filter(n => n.type === 'Mairie');
});
