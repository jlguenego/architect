
import textHtml from './text.html';

export const state = {
	data: {
		title: `Remparts de Vezelay`,
		description: `Restauration des remparts et de la tour des Ursulines.`,
		image: {
			main: 'img/photo/project/rempart/vezelay/rempart.jpg',
			mainPortrait: 'img/photo/project/rempart/vezelay/rempart.jpg',
			trios: [[{
				url: 'img/photo/project/rempart/vezelay/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/rempart/vezelay/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/rempart/vezelay/03.jpg',
				caption: 'Image 3'
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

