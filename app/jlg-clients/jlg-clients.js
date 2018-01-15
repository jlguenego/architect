const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl() {
	this.list = [
		// Mairies
		{
			name: 'Commune de Torcy',
			zip: 77200,
			type: 'Mairie',
			year: '2010',
		}, {
			name: 'Commune de Mesnil-Amélot',
			zip: 77990,
			type: 'Mairie',
			year: '2016-maintenant',
		}, {
			name: 'Commune de Les Mârets',
			zip: 77560,
			type: 'Mairie',
			year: '2016-maintenant',
		}, {
			name: 'Commune de Guignes',
			zip: 77390,
			type: 'Mairie',
			year: '2016-maintenant',
		}, {
			name: 'Commune de Amillis',
			zip: 77120,
			type: 'Mairie',
			year: '2016-maintenant',
		}, {
			name: 'Commune de Villeneuve-sous-Dammartin',
			zip: 77230,
			type: 'Mairie',
			year: '2012-2017',
		}, {
			name: 'Commune de Crécy-la-Chapelle',
			zip: 77580,
			type: 'Mairie',
			year: '2010-2016',
		}, {
			name: 'Moussy-le-Vieux',
			zip: 77230,
			type: 'Mairie',
			year: '2014-2015',
		}, {
			name: 'Varennes-sur-Seine',
			zip: 77230,
			type: 'Mairie',
			year: '2006-2015',
		}, {
			name: 'Sammeron',
			zip: 77260,
			type: 'Mairie',
			year: '2006-2014',
		}, {
			name: 'Bombon',
			zip: 77720,
			type: 'Mairie',
			year: '20109-2013',
		}, {
			name: 'Monthyon',
			zip: 77122,
			type: 'Mairie',
			year: '2007-2010',
		}, {
			name: 'Chauconin-Neufmontiers',
			zip: 77124,
			type: 'Mairie',
			year: '2006-maintenant',
		}, {
			name: 'Thieux',
			zip: 77230,
			type: 'Mairie',
			year: '2016',
		}, {
			name: 'Saint Fiacre',
			zip: 77470,
			type: 'Mairie',
			year: '2016',
		}, {
			name: 'Iverny',
			zip: 77165,
			type: 'Mairie',
			year: '2016',
		}, {
			name: 'Le Thillay',
			zip: 95500,
			type: 'Mairie',
			year: '2016-maintenant',
		}, {
			name: 'Louan-Villegruis-Fontaine',
			zip: 77560,
			type: 'Mairie',
			year: '2016',
		}, {
			name: 'Reuil-en-Brie',
			zip: 77260,
			type: 'Mairie',
			year: '2009',
		}, {
			name: 'Bernay-Vilbert',
			zip: 77540,
			type: 'Mairie',
			year: '2008-2014',
		}, {
			name: 'Maisoncelles-en-Brie',
			zip: 77580,
			type: 'Mairie',
			year: '2016',
		},
		// Collectivité locales


		{
			name: 'EPAMARNE',
			zip: 77200,
			type: 'CL',
			year: '2010',
		}, {
			name: 'Marne et Gondoires',
			zip: 77200,
			type: 'CL',
			year: '2010',
		}
	];

	this.mairies = this.list.filter(n => n.type === 'Mairie');
	this.collectivitesLocales = this.list.filter(n => n.type === 'CL');
});
