import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un immeuble de bureaux et entrepôt à Chanteloup-en-Brie`,
		description: `Construction d’un immeuble de bureaux et entrepôt à Chanteloup-en-Brie`,
		image: {
			main: 'img/photo/project/tertiaire/chanteloup-en-brie/chanteloup-en-brie.jpg',
			mainPortrait: 'img/photo/project/tertiaire/chanteloup-en-brie/chanteloup-en-brie.jpg',
			others: [
				'img/photo/project/tertiaire/chanteloup-en-brie/chanteloup-en-brie.jpg',
				'img/photo/project/tertiaire/chanteloup-en-brie/chanteloup-en-brie.jpg',
			]
		},
		moa: {
			name: 'privée'
		},
		interventions: [
			{
				year: 2011,
				title: 'Construction d’un immeuble de bureaux et entrepôt à Chanteloup-en-Brie',
				missions: [
					'Maîtrise d’œuvre',
					'Autorisation de travaux'
				],
				price: '1 000 000 € HT'
			}
		],
		text: textHtml,
	}
};

