import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Georges de Crécy-la-Chapelle`,
		description: `Eglise Saint Georges de Crécy-la-Chapelle`,
		image: {
			main: 'img/photo/project/eglise/crecy-la-chapelle/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/crecy-la-chapelle/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/crecy-la-chapelle/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/eglise/crecy-la-chapelle/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/eglise/crecy-la-chapelle/03.jpg',
				caption: 'Image 3'
			}]]
		},
		moa: {
			name: 'Ville de Crécy-la-Chapelle (77)',
			url: 'http://www.crecylachapelle.eu/',
		},
		interventions: [
			{
				year: '2016 – En cours',
				title: `Réfection des menuiseries intérieures et de l’installation électrique`,
				missions: [
					'Maîtrise d\'oeuvre',
				],
				price: '240 000 € HT'
			},
			{
				year: 2013,
				title: `Restauration du clocher et du beffroi`,
				missions: [
					'Maîtrise d\'oeuvre',
				],
				price: '308 000 € HT'
			},
			{
				year: 2010,
				title: `Etude préalable`,
			}
		],
		text: textHtml,
	}
};
