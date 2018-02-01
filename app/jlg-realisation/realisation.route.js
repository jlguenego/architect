import realisationHtml from './tmpl/realisation.html';

export const realisationRoute = {
	template: realisationHtml,
	controller: function RealisationCtrl($stateParams, projects, misc) {
		'ngInject';

		this.chapterMap = [{
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
			key: 'chateau',
			value: 'Chateaux',
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

		console.log('$stateParams', $stateParams);
		// if ($stateParams.client) {

		// }

		const chapters = this.chapterMap.map(n => n.key);
		chapters.forEach(type => {
			this[`${type}Trios`] = projects.filter(n => {
				if ($stateParams.client) {
					if (typeof n.data.client !== 'object') {
						return false;
					}
					if (misc.toSlug(n.data.client.name) !== misc.toSlug($stateParams.client)) {
						return false;
					}
				}
				return n.type === type;
			}).reduce((acc, n, i) => {
				if (i % 3) {
					acc[acc.length - 1].push(n);
				} else {
					acc.push([n]);
				}
				return acc;
			}, []);
		});
	}
};
