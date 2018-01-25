import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Jacques et Saint Philippe à Reuil-en-Brie`,
		description: `Eglise Saint Jacques et Saint Philippe à Reuil-en-Brie`,
		image: {
			main: 'img/photo/project/eglise/reuil-en-brie/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/reuil-en-brie/eglise.jpg',
			others: [
				'img/photo/project/eglise/reuil-en-brie/eglise.jpg',
				'img/photo/project/eglise/reuil-en-brie/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Reuil-en-Brie (77)',
			url: 'http://www.reuil-en-brie.fr/',
		},
		interventions: [
			{
				year: 2009,
				title: 'Etude préalable'
			}
		],
		text: textHtml,
	}
};
