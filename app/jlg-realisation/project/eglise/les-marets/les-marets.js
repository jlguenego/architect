import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Hubert de Les Mârets`,
		description: `Eglise Saint Hubert de Les Mârets`,
		image: {
			main: 'img/photo/project/eglise/les-marets/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/les-marets/eglise.jpg',
			others: [
				'img/photo/project/eglise/les-marets/eglise.jpg',
				'img/photo/project/eglise/les-marets/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Les Mârets (77)',
		},
		interventions: [
			{
				year: '2016 – En cours',
				title: `Restauration des parements extérieurs du chœur `,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '140 000 € HT'
			},
		],
		classement: 'Classée MH',
		text: textHtml,
	}
};
