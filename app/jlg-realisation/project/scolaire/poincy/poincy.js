import textHtml from './text.html';

export const state = {
	data: {
		priority: 1000,
		title: `Ecole de Poincy`,
		description: `Réhabilitation de l’école à Poincy`,
		image: {
			main: 'img/photo/project/scolaire/poincy/parallax.jpg',
			mainPortrait: 'img/photo/project/scolaire/poincy/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/scolaire/poincy/01.jpg',
					caption: 'Façade principale - après travaux'
				}, {
					url: 'img/photo/project/scolaire/poincy/02.jpg',
					caption: 'Façade arrière - après travaux'
				}, {
					url: 'img/photo/project/scolaire/poincy/03.jpg',
					caption: `Intérieur - après travaux`
				}],
				[{
					url: 'img/photo/project/scolaire/poincy/04.jpg',
					caption: 'Façade principale - avant travaux'
					
				}, {
					url: 'img/photo/project/scolaire/poincy/05.jpg',
					caption: `Façade arrière - avant travaux`
					
				}, {
					url: 'img/photo/project/scolaire/poincy/06.jpg',
					caption: 'Intérieur - avant travaux'
				}]
			]
		},
		moa: {
			name: 'Commune de Poincy (77)',
			url: 'http://www.poincy.fr/',
		},
		interventions: [{
			year: 2016,
			title: `Réhabilitation de l’école`,
			missions: [
				'Maîtrise d’œuvre',
				'OPC'
			],
			price: '420 000 € HT'
		}],
		text: textHtml,
		client: {
			name: `Poincy`,
			zip: 77470,
			type: 'Mairie',
		}
	}
};
