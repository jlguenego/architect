import realisationHtml from './tmpl/realisation.html';

export const realisationRoute = {
	template: realisationHtml,
	controller: function RealisationCtrl($stateParams, projects, misc) {
		'ngInject';

		this.chapterMap = [{
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
		
		this.chapterMap.forEach(n => {
			n.image = `img/photo/project/${n.key}/thumbnail-${n.key}.jpg`;
			n.state = `realisations:category({category: '${n.key}'})`;
		});	

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
				if (n.type !== type) {
					return false;
				}
				if ($stateParams.client) {
					this.client = n.data.client;
				}
				return true;
			}).sort((a, b) => {
				const pa = a.data.priority || 0;
				const pb = b.data.priority || 0;
				return pb - pa;
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
