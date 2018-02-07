import textHtml from './text.html';

export const state = {
	data: {
		title: `Salle polyvalente à Bussy-Saint-Martin`,
		description: `Extension de la salle polyvalente à Bussy-Saint-Martin`,
		image: {
			main: 'img/photo/project/tertiaire/bussy-st-martin/parallax.jpg',
			mainPortrait: 'img/photo/project/tertiaire/bussy-st-martin/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/tertiaire/bussy-st-martin/01.jpg',
					caption: `Pendant les travaux`
				}, {
					url: 'img/photo/project/tertiaire/bussy-st-martin/02.jpg',
					caption: `Percement d'un mur de structure`
				}, {
					url: 'img/photo/project/tertiaire/bussy-st-martin/03.jpg',
					caption: `Après travaux`
				}],
				[{
					url: 'img/photo/project/tertiaire/bussy-st-martin/04.jpg',
					caption: `Volet paysager`
				}, {
					url: 'img/photo/project/tertiaire/bussy-st-martin/05.jpg',
					caption: `Vue aérienne Google avant travaux`
				}, {
					url: 'img/photo/project/tertiaire/bussy-st-martin/06.jpg',
					caption: `Vue aérienne 3D Google après travaux`
				}],
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
