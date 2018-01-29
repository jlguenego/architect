
import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Lambert de Varennes-sur-Seine`,
		description: `Eglise Saint Lambert de Varennes-sur-Seine`,
		image: {
			main: 'img/photo/project/eglise/varennes-sur-seine/varennes-sur-seine.jpg',
			mainPortrait: 'img/photo/project/eglise/varennes-sur-seine/varennes-sur-seine.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/varennes-sur-seine/01.jpg',
				caption: 'Plans'
			}, {
				url: 'img/photo/project/eglise/varennes-sur-seine/02.jpg',
				caption: 'Restauration de la couverture'
			}, {
				url: 'img/photo/project/eglise/varennes-sur-seine/03.jpg',
				caption: 'Restauration des parements intérieurs'
			}]]
		},
		moa: {
			name: 'Commune de Varennes sur Seine (77)',
			url: 'http://www.varennes-sur-seine.fr/',
		},
		interventions: [
			{
				year: 2015,
				title: `Restauration des parements intérieurs`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '140 000 € HT'
			},
			{
				year: 2012,
				title: `Restauration de la toiture de l’église`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '260 000 € HT'
			},
			{
				year: 2010,
				title: `Restauration du clocher`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '123 000 € HT'
			},
			{
				year: 2008,
				title: `Travaux de reconnaissance et d’urgence`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '20 000 € HT'
			},
			{
				year: 2006,
				title: `Etude préalable`,
			},

		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};

