import textHtml from './text.html';

export const state = {
	data: {
		title: `Locaux administratifs à Tournan-en-Brie`,
		description: `Réhabilitation d’une ancienne grange en locaux administratifs à Tournan-en-Brie`,
		image: {
			main: 'img/photo/project/tertiaire/tournan-en-brie/tertiaire.jpg',
			mainPortrait: 'img/photo/project/tertiaire/tournan-en-brie/tertiaire.jpg',
			others: [
				'img/photo/project/tertiaire/tournan-en-brie/tertiaire.jpg',
				'img/photo/project/tertiaire/tournan-en-brie/tertiaire.jpg',
			]
		},
		moa: {
			name: 'Ville de Tournan-en-Brie (77)',
			url: 'http://www.tournan-en-brie.fr/',
		},
		interventions: [{
			year: '2017',
			ongoing: true,
			title: 'Réhabilitation d’une ancienne grange en locaux administratifs',
			missions: [
				'Maîtrise d\'oeuvre'
			],
			price: '741 900 € HT'
		}],
		text: textHtml,
		client: {
			name: `Tournan-en-Brie`,
			zip: 77220,
			type: 'Mairie',
		}
	}
};
