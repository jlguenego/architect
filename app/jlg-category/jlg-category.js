const app = angular.module('jlg-category', []);

const chapterMap = [{
	key: 'chateau',
	value: 'Châteaux',
	image: 'thumbnail-ferrieres',
}, {
	key: 'eglise',
	value: 'Eglises',
	description: `
    Au moins 40 mairies du département de Seine-et-Marne nous ont fait confiance
    pour intervenir sur leur églises (Etude préalable, Travaux, etc.)           
	`,
	image: 'thumbnail-ferrieres',
}, {
	key: 'rempart',
	value: 'Remparts',
	image: 'thumbnail-ferrieres',
}, {
	key: 'abbaye',
	value: 'Abbayes',
	image: 'thumbnail-ferrieres',
}, {
	key: 'ferme',
	value: 'Fermes',
	image: 'thumbnail-ferrieres',
}, {
	key: 'restauration-par-ext',
	value: 'Restauration - Parements extérieurs',
	image: 'thumbnail-ferrieres',
}, {
	key: 'serre',
	value: 'Serres',
	image: 'thumbnail-ferrieres',
}, {
	key: 'tertiaire',
	value: 'Tertiaire - Administration - Autres - Public',
	image: 'thumbnail-ferrieres',
}, {
	key: 'sport',
	value: 'Sports - Loisirs',
	image: 'thumbnail-ferrieres',
}, {
	key: 'marche-couvert',
	value: 'Marchés couverts',
	image: 'thumbnail-ferrieres',
}, {
	key: 'scolaire',
	value: 'Scolaire - Education',
	image: 'thumbnail-ferrieres',
}];

chapterMap.forEach(n => {
	n.state = `realisations:category({category: '${n.key}'})`;
});

app.service('category', function Category() {
	'ngInject';

	this.getList = () => {
		return chapterMap;
	};
});
