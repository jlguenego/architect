import textHtml from './text.html';

export const state = {
	data: {
		title: `Stade de Varennes-sur-Seine`,
		description: `Construction d’un club house Stade de Varennes-sur-Seine (77)`,
		image: {
			main: 'img/photo/project/sport/varennes-sur-seine/parallax.jpg',
			mainPortrait: 'img/photo/project/sport/varennes-sur-seine/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/sport/varennes-sur-seine/01.jpg',
					caption: `Présentation du projet`
				}, {
					url: 'img/photo/project/sport/varennes-sur-seine/02.jpg',
					caption: 'Avant le projet'
				}, {
					url: 'img/photo/project/sport/varennes-sur-seine/03.jpg',
					caption: 'Après travaux'
				}]
			]
		},
		moa: {
			name: 'Commune de Varennes sur Seine (77)',
			url: 'http://www.varennes-sur-seine.fr/',
		},
		interventions: [{
			year: 2016,
			title: `Construction d’un club house`,
			missions: [
				'Maîtrise d’œuvre',
				'OPC'
			],
			price: '150 400 Euros HT'
		}],
		text: textHtml,
		client: {
			name: 'Varennes-sur-Seine',
			zip: 77230,
			type: 'Mairie',
		}
	}
};
