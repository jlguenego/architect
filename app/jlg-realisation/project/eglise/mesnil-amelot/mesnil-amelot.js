
import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin du Mesnil-Amélot`,
		description: `Restauration des parements extérieurs et réfection du beffroi du clocher - 
		Eglise Saint Martin du Mesnil-Amélot`,
		image: {
			thumbnail: 'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			main: 'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			others: [
				'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
				'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune du Mesnil-Amélot (77)',
			url: 'http://www.lemesnilamelot.fr/',
		},
		interventions: [
			{
				year: '2016 - En cours',
				title: `Restauration des parements extérieurs et réfection du beffroi du clocher`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '390 000 € HT'
			}
		],
		classement: 'Classée MH',
		text: textHtml,
	}
};
