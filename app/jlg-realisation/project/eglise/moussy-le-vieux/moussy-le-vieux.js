import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin de Moussy-le-Vieux`,
		description: `
this is the meta description...`,
		image: {
			thumbnail: 'img/photo/project/chauconin/saint-saturnin.jpg',
			main: 'img/photo/project/chauconin/saint-saturnin.jpg',
			others: [
				'img/photo/project/chauconin/saint-saturnin.jpg',
				'img/photo/project/chauconin/saint-saturnin.jpg',
			]
		},
		client: {
			name: 'Mairie de Chauconin-Neufmontiers (77)',
			url: 'http://chauconin-neufmontiers.fr/',
		},
		price: '300 000 Euros HT',
		text: textHtml,
	}
};
