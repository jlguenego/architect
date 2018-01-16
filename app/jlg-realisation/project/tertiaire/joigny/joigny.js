import textHtml from './text.html';

export const state = {
	data: {
		title: `Caisse Primaire d'Assurance Maladie`,
		description: `
this is the meta description...`,
		image: {
			thumbnail: 'img/photo/project/joigny/cpam.jpg',
			main: 'img/photo/project/joigny/cpam.jpg',
			others: [
				'img/photo/project/joigny/cpam.jpg',
				'img/photo/project/joigny/cpam.jpg',
			]
		},
		moa: {
			name: 'Mairie de Chauconin-Neufmontiers (77)',
			url: 'http://chauconin-neufmontiers.fr/',
		},
		price: '300 000 Euros HT',
		text: textHtml,
	}
};
