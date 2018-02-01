import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Germain à Bombon`,
		description: `Eglise Saint Germain à Bombon`,
		image: {
			main: 'img/photo/project/eglise/bombon/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/bombon/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/bombon/01.jpg',
				caption: 'Coupe'
			}, {
				url: 'img/photo/project/eglise/bombon/02.jpg',
				caption: 'Travaux'
			}, {
				url: 'img/photo/project/eglise/bombon/03.jpg',
				caption: `Le clocher de l'église`
			}]]
		},
		moa: {
			name: 'Commune de Bombon (77)',
		},
		interventions: [
			{
				year: 2013,
				title: `Restauration de l’installation électrique`,
				missions: [
					'Maîtrise d\'oeuvre',
				],
				price: '15 000 € HT'
			},
			{
				year: 2012,
				title: `Restauration des façades sud et ouest`,
				missions: [
					'Maîtrise d\'oeuvre',
				],
				price: '150 000 € HT'
			},
			{
				year: 2009,
				title: `Etude préalable`
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
		client: {
			name: 'Bombon',
			zip: 77720,
			type: 'Mairie',
		}
	}
};

