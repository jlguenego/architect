import textHtml from './text.html';

export const state = {
	data: {
		title: `Etablissements scolaires à Chelles`,
		description: `Travaux de mise en accessibilité de deux établissements scolaires à Chelles`,
		image: {
			main: 'img/photo/project/scolaire/chelles/ecole.jpg',
			mainPortrait: 'img/photo/project/scolaire/chelles/ecole.jpg',
			others: [
				'img/photo/project/scolaire/chelles/ecole.jpg',
				'img/photo/project/scolaire/chelles/ecole.jpg',
			]
		},
		moa: {
			name: 'Ville de Chelles (77)',
			url: 'http://www.chelles.fr/',
		},
		interventions: [
			{
				year: 2014,
				title: `Travaux de mise en accessibilité de deux établissements scolaires`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '410 000 € HT'
			}
		],
		text: textHtml,
	}
};


