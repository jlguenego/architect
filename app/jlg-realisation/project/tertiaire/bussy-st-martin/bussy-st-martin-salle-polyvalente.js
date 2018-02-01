import textHtml from './text.html';

export const state = {
	data: {
		title: `Salle polyvalente à Bussy-Saint-Martin`,
		description: `Extension de la salle polyvalente à Bussy-Saint-Martin`,
		image: {
			main: 'img/photo/project/tertiaire/bussy-st-martin/salle-polyvalente.jpg',
			mainPortrait: 'img/photo/project/tertiaire/bussy-st-martin/salle-polyvalente.jpg',
			others: [
				'img/photo/project/tertiaire/bussy-st-martin/salle-polyvalente.jpg',
				'img/photo/project/tertiaire/bussy-st-martin/salle-polyvalente.jpg',
			]
		},
		moa: {
			name: 'Commune de Bussy-Saint-Martin (77)',
			url: 'http://www.bussy-saint-martin.com/',
		},
		interventions: [{
			year: 2016,
			title: `Extension de la salle polyvalente à Bussy-Saint-Martin`,
			missions: [
				'Maîtrise d\'oeuvre'
			],
			price: '184 000 € HT'
		}],
		text: textHtml,
		client: {
			name: `Bussy-Saint-Martin`,
			zip: 77600,
			type: 'Mairie',
		}
	}
};
