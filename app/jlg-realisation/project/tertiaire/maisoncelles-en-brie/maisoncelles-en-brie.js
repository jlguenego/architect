import textHtml from './text.html';

export const state = {
	data: {
		title: `Réhabilitation d’un immeuble ancien à Maisoncelles-en-Brie`,
		description: `Réhabilitation d’un immeuble ancien avec création d’un bar-brasserie et un multiservice à Maisoncelles-en-Brie`,
		image: {
			main: 'img/photo/project/tertiaire/maisoncelles-en-brie/maisoncelles-en-brie.jpg',
			mainPortrait: 'img/photo/project/tertiaire/maisoncelles-en-brie/maisoncelles-en-brie.jpg',
			others: [
				'img/photo/project/tertiaire/maisoncelles-en-brie/maisoncelles-en-brie.jpg',
				'img/photo/project/tertiaire/maisoncelles-en-brie/maisoncelles-en-brie.jpg',
			]
		},
		moa: {
			name: 'Commune de Maisoncelles-en-Brie (77)',
		},
		interventions: [
			{
				year: 2010,
				title: 'Réhabilitation d’un immeuble ancien avec création d’un bar-brasserie et un multiservice à Maisoncelles-en-Brie',
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '370 000 € HT'
			}
		],
		text: textHtml,
	}
};

