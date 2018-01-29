
import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Sulpice à Maisoncelles-en-Brie`,
		description: `Eglise Saint Sulpice à Maisoncelles-en-Brie`,
		image: {
			main: 'img/photo/project/eglise/maisoncelles-en-brie/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/maisoncelles-en-brie/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/maisoncelles-en-brie/01.jpg',
				caption: 'Coupe'
			}, {
				url: 'img/photo/project/eglise/maisoncelles-en-brie/02.jpg',
				caption: ''
			}, {
				url: 'img/photo/project/eglise/maisoncelles-en-brie/03.jpg',
				caption: ''
			}]]
		},
		moa: {
			name: 'Commune de Maisoncelles-en-Brie (77)',
		},
		interventions: [
			{
				year: 2007,
				title: `Travaux d’urgence`,
				missions: [
					'Maîtrise d\'oeuvre',
				],
				price: '15 000 € HT'
			}
		],
		text: textHtml,
	}
};

