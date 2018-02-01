import textHtml from './text.html';

export const state = {
	data: {
		title: `Beffroi communal à Grisy-Suisnes`,
		description: `Restauration du beffroi communal à Grisy-Suisnes`,
		image: {
			main: 'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
			trios: [
				[{
					url: 'img/photo/project/restauration-par-ext/grisy-suisnes/01.jpg',
					caption: 'Façade'
				}, {
					url: 'img/photo/project/restauration-par-ext/grisy-suisnes/02.jpg',
					caption: 'Horloge du beffroi'
				}, {
					url: 'img/photo/project/restauration-par-ext/grisy-suisnes/03.jpg',
					caption: 'Restauration de l\'horloge'
				}]
			]
		},
		moa: {
			name: 'Commune Grisy-Suisnes (77)',
			url: 'http://www.grisy-suisnes.fr/',
		},
		interventions: [{
			year: 2010,
			title: `Restauration du beffroi communal à Grisy-Suisnes`,
			missions: [
				'Maîtrise d’œuvre',
				'OPC'
			],
			price: '170 000 € HT'
		}],
		text: textHtml,
		client: {
			name: `Grisy-Suisnes`,
			zip: 77166,
			type: 'Mairie',
		}
	}
};
