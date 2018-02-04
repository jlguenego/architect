import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Noisiel et manège à Noisiel`,
		description: `Réfection des parements extérieurs du château de l’ancienne Chocolaterie Menier`,
		image: {
			main: 'img/photo/project/chateau/noisiel/parallax.jpg',
			mainPortrait: 'img/photo/project/chateau/noisiel/parallax.jpg',
			trios: [
				[{
					url: 'img/photo/project/chateau/noisiel/01.jpg',
					caption: ''
				}, {
					url: 'img/photo/project/chateau/noisiel/02.jpg',
					caption: ''
				}, {
					url: 'img/photo/project/chateau/noisiel/03.jpg',
					caption: ''
				}]
			]
		},
		moa: {
			name: 'EPAMARNE',
			url: 'https://www.epamarne-epafrance.fr/',
		},
		interventions: [
			{
				year: '2007 - 2008',
				title: `Réfection des parements extérieurs du château de l’ancienne Chocolaterie Menier`,
				missions: [
					'Mission de maîtrise d’œuvre',
					'OPC'
				],
				price: '420 000 € HT'
			},
			{
				year: '2006 - 2007',
				title: `Réfection des parements extérieurs du Manège de l’ancienne Chocolaterie Menier`,
				missions: [
					'Mission de maîtrise d’œuvre',
					'OPC'
				],
				price: '350 000 € HT'
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
		client: {
			name: 'EPAMARNE',
			zip: 77186,
			type: 'Public Autres',
		}
	}
};


