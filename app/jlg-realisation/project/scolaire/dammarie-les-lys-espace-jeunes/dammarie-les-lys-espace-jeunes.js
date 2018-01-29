import textHtml from './text.html';

export const state = {
	data: {
		title: `Espace Jeunes à Dammarie-les-Lys`,
		description: `espace Jeunes à Dammarie-les-Lys`,
		image: {
			main: 'img/photo/project/scolaire/dammarie-les-lys/espace-jeunes.jpg',
			mainPortrait: 'img/photo/project/scolaire/dammarie-les-lys/espace-jeunes.jpg',
			trios: [[{
				url: 'img/photo/project/scolaire/dammarie-les-lys/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/scolaire/dammarie-les-lys/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/scolaire/dammarie-les-lys/03.jpg',
				caption: 'Image 3'
			}]]
		},
		moa: {
			name: 'Ville de Dammarie-les-Lys (77)',
			url: 'http://www.mairie-dammarie-les-lys.fr/',
		},
		interventions: [
			{
				year: 2012,
				title: `Aménagement espace Jeunes`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '620 000 € HT'
			}
		],
		text: textHtml,
	}
};
