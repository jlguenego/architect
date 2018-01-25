
import textHtml from './text.html';

export const state = {
	data: {
		title: `Beffroi communal à Grisy-Suisnes`,
		description: `Restauration du beffroi communal à Grisy-Suisnes`,
		image: {
			main: 'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
			others: [
				'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
				'img/photo/project/restauration-par-ext/grisy-suisnes/grisy-suisnes.jpg',
			]
		},
		moa: {
			name: 'Commune Grisy-Suisnes (77)',
			url: 'http://www.grisy-suisnes.fr/',
		},
		interventions: [
			{
				year: 2010,
				title: `Restauration du beffroi communal à Grisy-Suisnes`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '170 000 € HT'
			}
		],
		text: textHtml,
	}
};


