
import textHtml from './text.html';

export const state = {
	data: {
		title: `Marché d’Approvisionnement de Longjumeau`,
		description: `Réhabilitation du Marché d’Approvisionnement à Longjumeau`,
		image: {
			main: 'img/photo/project/marche-couvert/longjumeau/marche.jpg',
			mainPortrait: 'img/photo/project/marche-couvert/longjumeau/marche.jpg',
			trios: [[{
				url: 'img/photo/project/marche-couvert/longjumeau/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/marche-couvert/longjumeau/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/marche-couvert/longjumeau/03.jpg',
				caption: 'Image 3'
			}]]
		},
		moa: {
			name: 'Ville de Longjumeau (91)',
			url: 'http://www.longjumeau.fr/',
		},
		interventions: [
			{
				year: 2012,
				title: `Réhabilitation du Marché d’Approvisionnement`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '457 495 € HT'
			}
		],
		text: textHtml,
	}
};
