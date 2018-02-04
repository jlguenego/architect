import textHtml from './text.html';

export const state = {
	data: {
		priority: 500,
		title: `Château de Fleury-en-Bière`,
		description: `Restauration de la Fabrique du parc du château`,
		image: {
			main: 'img/photo/project/chateau/fleury-en-biere/parallax.jpg',
			mainPortrait: 'img/photo/project/chateau/fleury-en-biere/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/chateau/fleury-en-biere/01.jpg',
					caption: `Après restauration`
				}, {
					url: 'img/photo/project/chateau/fleury-en-biere/02.jpg',
					caption: 'Avant incendie'
				}, {
					url: 'img/photo/project/chateau/fleury-en-biere/03.jpg',
					// eslint-disable-next-line
					caption: 'Incendie (<a href="https://actu.fr/ile-de-france/melun_77288/incendie-dans-un-chateau-classe-monument-historique_6631956.html">source</a>)'
				}]
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [
			{
				year: '2016',
				ongoing: true,
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

