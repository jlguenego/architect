import textHtml from './text.html';

export const state = {
	data: {
		title: `Remparts de Charleville-Mézières`,
		description: `Reprise de la structure des remparts, des charpentes et des bâtiments, 12 places du Château`,
		image: {
			main: 'img/photo/project/rempart/charleville-mezieres/rempart.jpg',
			mainPortrait: 'img/photo/project/rempart/charleville-mezieres/rempart.jpg',
			others: [
				'img/photo/project/rempart/charleville-mezieres/rempart.jpg',
				'img/photo/project/rempart/charleville-mezieres/rempart.jpg',
			]
		},
		moa: {
			name: 'Conseil départemental des Ardennes (08)',
			url: 'http://www.cd08.fr/',
		},
		interventions: [{
			year: '2015',
			ongoing: true,
			title: `Reprise de la structure des remparts, des charpentes et des bâtiments`,
			missions: [
				'Maîtrise d\'oeuvre',
				'OPC'
			],
			price: '360 000 € HT'
		}],
		classement: 'Inscrit MH',
		text: textHtml,
		client: {
			name: `Conseil départemental des Ardennes`,
			zip: '08000',
			type: 'Public Autres',
		}
	}
};
