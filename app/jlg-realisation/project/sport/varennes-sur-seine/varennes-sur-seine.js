import textHtml from './text.html';

export const state = {
	data: {
		title: `Stade de Varennes-sur-Seine`,
		description: `Construction d’un club house Stade de Varennes-sur-Seine (77)`,
		image: {
			main: 'img/photo/project/sport/varennes-sur-seine/stade.jpg',
			mainPortrait: 'img/photo/project/sport/varennes-sur-seine/stade.jpg',
			others: [
				'img/photo/project/sport/varennes-sur-seine/stade.jpg',
				'img/photo/project/sport/varennes-sur-seine/stade.jpg',
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
