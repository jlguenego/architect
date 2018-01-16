
import textHtml from './text.html';

export const state = {
	data: {
		title: `Remparts de Charleville-Mézières`,
		description: `Reprise de la structure des remparts, des charpentes et des bâtiments, 12 places du Château`,
		image: {
			thumbnail: 'img/photo/project/chauconin/saint-saturnin.jpg',
			main: 'img/photo/project/chauconin/saint-saturnin.jpg',
			others: [
				'img/photo/project/chauconin/saint-saturnin.jpg',
				'img/photo/project/chauconin/saint-saturnin.jpg',
			]
		},
		moa: {
			name: 'Conseil départemental des Ardennes',
			url: 'http://www.cd08.fr/',
		},
		price: '360 000 € HT',
		mission: 'Mission de Maîtrise d’œuvre / OPC',
		classement: 'Inscrit MH',
		year: '2015 - 2018',
		text: textHtml,
	}
};
