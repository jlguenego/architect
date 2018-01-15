import realisationHtml from './tmpl/realisation.html';

export const config = ($stateProvider) => {
	'ngInject';

	$stateProvider.state({
		name: 'chauconin',
		url: '/realisations/chauconin',
		template: realisationHtml,
		controller: function($state) {
			this.data = $state.$current.data;
		},
		controllerAs: '$ctrl',
		data: {
			title: `Eglise Saint Saturnin de Chauconin`,
			description: `
this is the meta description...`,
			image: {
				main: 'img/photo/realisations/chauconin/saint-saturnin.jpg',
				others: [
					'img/photo/realisations/chauconin/saint-saturnin.jpg',
					'img/photo/realisations/chauconin/saint-saturnin.jpg',
				]
			},
			client: {
				name: 'Mairie de Chauconin-Neufmontiers (77)',
				url: 'http://chauconin-neufmontiers.fr/',
			},
			text: `
« <b>L’originalité de votre église SAINT-SATURNIN </b>consiste dans la 
conception architecturale qui réunit une période charnière de
 l’histoire : un passage harmonieux de l’architecture gothique
  à la resplendissante Renaissance française.
Construite à partir de 1580, elle se présente sous la forme
d’une large nef unique à cinq travées terminées par une
 abside arrondie. Deux chapelles, l’une au nord, l’autre 
 au sud donnent au plan un aspect cruciforme. Le transept est
  englobé complètement dans l’unité spatiale de la nef.
   A l’intérieur de l’église, les formes très épurées des murs sont 
   animées par la lumière naturelle des fenêtres très larges 
   qui occupent plus de la moitié des parois de chaque travée,
	lumière qui affine et dématérialise les colonnes engagées.
	 Cette ambiance qui résulte du jeu subtil entre le «solide» 
	 et le «diaphane» est accompagnée d’une parfaite acoustique 
	 qui renforce le caractère majestueux de l’édifice. »
Suzana Guénégo, architecte 
				`,
		}
	});

};
