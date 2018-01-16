import textHtml from './text.html';

export const state = {
	data: {
		title: `Aménagement CPAM de la ville de Joigny`,
		description: `Aménagement CPAM de la ville de Joigny`,
		image: {
			thumbnail: 'img/photo/project/tertiaire/joigny/thumbnail.jpg',
			main: 'img/photo/project/tertiaire/joigny/cpam.jpg',
			mainPortrait: 'img/photo/project/tertiaire/joigny/cpam.jpg',
			others: [
				'img/photo/project/tertiaire/joigny/cpam.jpg',
				'img/photo/project/tertiaire/joigny/cpam.jpg',
			]
		},
		moa: {
			name: 'Ville de Joigny (89)',
			url: 'http://www.ville-joigny.fr/',
		},
		interventions: [
			{
				year: 2015,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '210 000 € HT'
			}
		],
		text: textHtml,
	}
};