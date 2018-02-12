import categoryHtml from './tmpl/category.html';

export const categoryRoute = {
	template: categoryHtml,
	controller: function CategoryCtrl($stateParams, projects, misc) {
		'ngInject';

		

		// const chapters = this.chapterMap.map(n => n.key);
		// chapters.forEach(type => {
		// 	this[`${type}Trios`] = projects.filter(n => {
		// 		if ($stateParams.client) {
		// 			if (typeof n.data.client !== 'object') {
		// 				return false;
		// 			}
		// 			if (misc.toSlug(n.data.client.name) !== misc.toSlug($stateParams.client)) {
		// 				return false;
		// 			}
		// 		}
		// 		if (n.type !== type) {
		// 			return false;
		// 		}
		// 		if ($stateParams.client) {
		// 			this.client = n.data.client;
		// 		}
		// 		return true;
		// 	}).sort((a, b) => {
		// 		const pa = a.data.priority || 0;
		// 		const pb = b.data.priority || 0;
		// 		return pb - pa;
		// 	}).reduce((acc, n, i) => {
		// 		if (i % 3) {
		// 			acc[acc.length - 1].push(n);
		// 		} else {
		// 			acc.push([n]);
		// 		}
		// 		return acc;
		// 	}, []);
		// });
	}
};
