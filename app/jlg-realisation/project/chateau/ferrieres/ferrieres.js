import textHtml from './text.html';

export const state = {
	data: {
		priority: 1000,
		title: `Château de Ferrières-en-Brie`,
		description: `
Restauration des parements extérieurs ainsi que de tous les intérieurs. Réaffectation du château`,
		image: {
			main: 'img/photo/project/chateau/ferrieres/parallax.jpg',
			mainPortrait: 'img/photo/project/chateau/ferrieres/parallax.jpg',
			trios: [
				[{
					url: 'img/photo/project/chateau/ferrieres/01.jpg',
					caption: `Avant travaux`
				}, {
					url: 'img/photo/project/chateau/ferrieres/02.jpg',
					caption: 'Pendant travaux'
				}, {
					url: 'img/photo/project/chateau/ferrieres/03.jpg',
					caption: 'Réfection parements extérieurs'
				}],
				[{
					url: 'img/photo/project/chateau/ferrieres/04.jpg',
					caption: `Façade Sud - côté jardins`
				}, {
					url: 'img/photo/project/chateau/ferrieres/05.jpg',
					caption: 'Réfection plafond'
				}, {
					url: 'img/photo/project/chateau/ferrieres/06.jpg',
					caption: `Escalier de l'entrée`
				}],
				[{
					url: 'img/photo/project/chateau/ferrieres/07.jpg',
					caption: `Façade Nord - côté entrée`
				}, {
					url: 'img/photo/project/chateau/ferrieres/08.jpg',
					caption: 'Transformation en salle de restaurant de luxe'
				}, {
					url: 'img/photo/project/chateau/ferrieres/09.jpg',
					caption: 'Salle de réception après restauration'
				}]
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [{
			year: '2013-2015',
			title: `Restauration complète et réaménagement du château de la famille Rothschild 
				en vue de l’ouverture d’une école d’hôtellerie, de gastronomie et de luxe`,
			missions: [
				'Mission de maîtrise d’œuvre Complète',
			],
			price: '10 000 000 € HT'
		}],
		classement: 'Classé MH',
		text: textHtml,
		client: 'privé'
	}
};
