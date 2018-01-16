import realisationHtml from './tmpl/realisation.html';

export const realisationRoute = {
	template: realisationHtml,
	controller: function RealisationCtrl(projects) {
		'ngInject';
		console.log('projects', projects);

		this.chapterMap = [{
			key: 'EGLISES',
			value: 'Eglises',
			description: `
            Au moins 40 mairies du département de Seine-et-Marne nous ont fait confiance
            pour intervenir sur leur églises (Etude préalable, Travaux, etc.)           
            `
		}, {
			key: 'REMPARTS',
			value: 'Remparts',
		}, {
			key: 'ABBAYES',
			value: 'Abbayes',
		}, {
			key: 'FERMES',
			value: 'FERMES',
		}, {
			key: 'CHATEAUX',
			value: 'CHATEAUX',
		}, {
			key: 'RESTAURATION_PAREMENTS_EXTERIEURS',
			value: 'RESTAURATION_PAREMENTS_EXTERIEURS',
		}, {
			key: 'SERRES',
			value: 'SERRES',
		}, {
			key: 'LAVOIRS',
			value: 'LAVOIRS',
		}, {
			key: 'TERTIAIRE_ADMINISTRATION_AUTRE_PUBLIC',
			value: 'TERTIAIRE_ADMINISTRATION_AUTRE_PUBLIC',
		}, {
			key: 'RESTAURATION_PAREMENTS_EXTERIEURS',
			value: 'RESTAURATION_PAREMENTS_EXTERIEURS',
		}];

		const chapters = this.chapterMap.map(n => n.key);
		chapters.forEach(type => {
			this[`${type}Trios`] = projects.filter(n => n.type === type).reduce((acc, n, i) => {
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
