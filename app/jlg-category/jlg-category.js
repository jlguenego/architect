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
	image: 'thumbnail-chauconin',
}, {
	key: 'rempart',
	value: 'Remparts',
	image: 'thumbnail-charleville-mezieres',
}, {
	key: 'abbaye',
	value: 'Abbayes',
	image: 'thumbnail-dammarie-les-lys',
}, {
	key: 'ferme',
	value: 'Fermes',
	image: 'thumbnail-coupvray',
}, {
	key: 'restauration-par-ext',
	value: 'Restauration - Parements extérieurs',
	image: 'thumbnail-bois-le-roi',
}, {
	key: 'serre',
	value: 'Serres',
	image: 'thumbnail-villiers-en-biere',
}, {
	key: 'tertiaire',
	value: 'Tertiaire - Administration - Autres - Public',
	image: 'thumbnail-tournan-en-brie',
}, {
	key: 'sport',
	value: 'Sports - Loisirs',
	image: 'thumbnail-torcy-stade',
}, {
	key: 'marche-couvert',
	value: 'Marchés couverts',
	image: 'thumbnail-torcy-marche',
}, {
	key: 'scolaire',
	value: 'Scolaire - Education',
	image: 'thumbnail-poincy',
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
