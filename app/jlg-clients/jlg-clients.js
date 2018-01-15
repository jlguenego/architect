const app = angular.module('jlg-clients', []);

app.controller('ClientCtrl', function ClientCtrl() {
	this.list = [
		// Mairies
		{
			name: 'Torcy',
			zip: 77200,
			type: 'Mairie',
			year: '2010',
		}, {
			name: 'Mesnil-Amélot',
			zip: 77990,
			type: 'Mairie',
			year: '2016-actuel',
		}, {
			name: 'Les Mârets',
			zip: 77560,
			type: 'Mairie',
			year: '2016-actuel',
		}, {
			name: 'Guignes',
			zip: 77390,
			type: 'Mairie',
			year: '2016-actuel',
		}, {
			name: 'Amillis',
			zip: 77120,
			type: 'Mairie',
			year: '2016-actuel',
		}, {
			name: 'Villeneuve-sous-Dammartin',
			zip: 77230,
			type: 'Mairie',
			year: '2012-2017',
		}, {
			name: 'Crécy-la-Chapelle',
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
			year: '2006-actuel',
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
			year: '2016-actuel',
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
		}, {
			name: `Orbais l'abbaye`,
			zip: 51270,
			type: 'Mairie',
			year: '2007',
		}, {
			name: `Bussy-Saint-Martin`,
			zip: 77600,
			type: 'Mairie',
			year: '2015',
		}, {
			name: `Grisy-Suisnes`,
			zip: 77166,
			type: 'Mairie',
			year: '2007',
		}, {
			name: `Moissy Cramayel`,
			zip: 77550,
			type: 'Mairie',
			year: '2012',
		}, {
			name: `Dammarie les Lys`,
			zip: 77190,
			type: 'Mairie',
			year: '2012',
		}, {
			name: `Longjumeau`,
			zip: 91160,
			type: 'Mairie',
			year: '2012',
		}, {
			name: `Jouarre`,
			zip: 77640,
			type: 'Mairie',
			year: '2015-2016',
		}, {
			name: `Coupvray`,
			zip: 77700,
			type: 'Mairie',
			year: '2013-actuel',
		}, {
			name: `Ferrières-en-Brie`,
			zip: 77164,
			type: 'Mairie',
			year: '2017-actuel',
		}, {
			name: `Bois le Roi`,
			zip: 77590,
			type: 'Mairie',
			year: '2017',
		}, {
			name: `Villiers en Bière`,
			zip: 77190,
			type: 'Mairie',
			year: '2017',
		}, {
			name: `Tournan-en-Brie`,
			zip: 77220,
			type: 'Mairie',
			year: '2017',
		}, {
			name: `Joigny`,
			zip: 89300,
			type: 'Mairie',
			year: '2015',
		}, {
			name: `Chelles`,
			zip: 77500,
			type: 'Mairie',
			year: '2015',
		}, {
			name: `Poincy`,
			zip: 77470,
			type: 'Mairie',
			year: '2016',
		},
		// Collectivité locales


		{
			name: 'EPAMARNE',
			zip: 77186,
			type: 'Public Autres',
			year: '2006',
		}, {
			name: `Les résidences`,
			zip: 78000,
			type: 'Public Autres',
			year: '2007',
		}, {
			name: `Conseil Régionial de Bourgogne`,
			zip: 21000,
			type: 'Public Autres',
			year: '2008',
		}, {
			name: `Conseil Régionial d'Ile de France`,
			zip: 75000,
			type: 'Public Autres',
			year: '2010',
		}, {
			name: `Conseil Départemental de Seine-et-Marne`,
			zip: 77000,
			type: 'Public Autres',
			year: '2006',
		}, {
			name: `Conseil Départemental de l'Yonne`,
			zip: 89000,
			type: 'Public Autres',
			year: '2006',
		}, {
			name: `Communauté d'aglomérations Marne et Gondoires`,
			zip: 77200,
			type: 'Public Autres',
			year: '2007',
        },
        
        // Privé
        {
			name: `Communauté d'aglomérations Marne et Gondoires`,
			zip: 77200,
			type: 'Public Autres',
			year: '2007',
        },

	];

	this.mairies = this.list.filter(n => n.type === 'Mairie');
	this.autresEntitesPubliques = this.list.filter(n => n.type === 'Public Autres');
});
