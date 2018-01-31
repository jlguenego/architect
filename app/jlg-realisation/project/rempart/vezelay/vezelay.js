
import textHtml from './text.html';

export const state = {
	data: {
		title: `Remparts de Vezelay`,
		description: `Restauration des remparts et de la tour des Ursulines.`,
		image: {
			main: 'img/photo/project/rempart/vezelay/parallax.jpg',
			mainPortrait: 'img/photo/project/rempart/vezelay/parallax.jpg',
			trios: [[{
				url: 'img/photo/project/rempart/vezelay/01.jpg',
				caption: 'Brochure explicative'
			}, {
				url: 'img/photo/project/rempart/vezelay/02.jpg',
				caption: 'Avant intervention'
			}, {
				url: 'img/photo/project/rempart/vezelay/03.jpg',
				caption: 'Après intervention'
			}]]
		},
		moa: {
			name: 'Conseil départemental de l’Yonne (89)',
			url: 'http://www.yonne.fr/',
		},
		interventions: [
			{
				year: '2012 – 2013',
				title: `Reprise de la structure des remparts, des charpentes et des bâtiments`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '636 000 € HT'
			}
		],
		classement: 'Site patrimonial remarquable',
		text: textHtml,
	}
};

