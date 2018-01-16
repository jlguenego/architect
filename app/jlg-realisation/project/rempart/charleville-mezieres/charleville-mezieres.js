
import textHtml from './text.html';

export const state = {
	data: {
		title: `Remparts de Charleville-Mézières`,
		description: `Reprise de la structure des remparts, des charpentes et des bâtiments, 12 places du Château`,
		image: {
			thumbnail: 'img/photo/project/rempart/charleville-mezieres/rempart.jpg',
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
		interventions: [
			{
				year: '2015 – En cours',
				title: `Reprise de la structure des remparts, des charpentes et des bâtiments`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '360 000 € HT'
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};

