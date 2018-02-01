import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Fleury-en-Bière`,
		description: `Restauration de la Fabrique du parc du château`,
		image: {
			main: 'img/photo/project/chateau/fleury-en-biere/fleury-en-biere.jpg',
			mainPortrait: 'img/photo/project/chateau/fleury-en-biere/fleury-en-biere.jpg',
			others: [
				'img/photo/project/chateau/fleury-en-biere/fleury-en-biere.jpg',
				'img/photo/project/chateau/fleury-en-biere/fleury-en-biere.jpg',
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [
			{
				year: '2016 - En cours',
				title: `Restauration de la Fabrique du parc du château`,
				missions: [
					'Mission de maîtrise d’œuvre',
				],
				price: '50 000 € HT'
			},
			{
				year: 2015,
				title: `Restauration du pavillon d’entrée, dit « de la Poterne »`,
				missions: [
					'Mission de maîtrise d’œuvre',
				],
				price: '100 000 € HT'
			}
		],
		classement: 'Classé MH',
		text: textHtml,
		client: 'privé'
	}
};

