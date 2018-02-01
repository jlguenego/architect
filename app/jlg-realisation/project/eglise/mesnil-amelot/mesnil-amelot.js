import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin du Mesnil-Amelot`,
		description: `Restauration des parements extérieurs et réfection du beffroi du clocher - 
		Eglise Saint Martin du Mesnil-Amelot`,
		image: {
			main: 'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			others: [
				'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
				'img/photo/project/eglise/mesnil-amelot/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune du Mesnil-Amelot (77)',
			url: 'http://www.lemesnilamelot.fr/',
		},
		interventions: [{
			year: '2016',
			ongoing: true,
			title: `Restauration des parements extérieurs et réfection du beffroi du clocher`,
			missions: [
				'Maîtrise d\'oeuvre',
				'OPC'
			],
			price: '390 000 € HT'
		}],
		classement: 'Classée MH',
		text: textHtml,
		client: {
			name: 'Mesnil-Amélot',
			zip: 77990,
			type: 'Mairie',
		}
	}
};
