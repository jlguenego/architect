const app = angular.module('jlg-category', []);

const chapterMap = [{
	key: 'chateau',
	value: 'Châteaux',
}, {
	key: 'eglise',
	value: 'Eglises',
	description: `
    Au moins 40 mairies du département de Seine-et-Marne nous ont fait confiance
    pour intervenir sur leur églises (Etude préalable, Travaux, etc.)           
    `
}, {
	key: 'rempart',
	value: 'Remparts',
}, {
	key: 'abbaye',
	value: 'Abbayes',
}, {
	key: 'ferme',
	value: 'Fermes',
}, {
	key: 'restauration-par-ext',
	value: 'Restauration - Parements extérieurs',
}, {
	key: 'serre',
	value: 'Serres',
}, {
	key: 'tertiaire',
	value: 'Tertiaire - Administration - Autres - Public',
}, {
	key: 'sport',
	value: 'Sports - Loisirs',
}, {
	key: 'marche-couvert',
	value: 'Marchés couverts',
}, {
	key: 'scolaire',
	value: 'Scolaire - Education',
}, {
	key: 'titi',
	value: 'Titi',
}];

chapterMap.forEach(n => {
	n.image = `img/photo/project/${n.key}/thumbnail-${n.key}.jpg`;
	n.state = `realisations:category({category: '${n.key}'})`;
});

app.service('category', function Category() {
	'ngInject';

	this.getList = () => {
		return chapterMap;
	};
});
