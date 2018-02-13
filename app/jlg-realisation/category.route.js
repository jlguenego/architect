import categoryHtml from './tmpl/category.html';

export const categoryRoute = {
	template: categoryHtml,
	controller: function CategoryCtrl($stateParams, projects, misc, category) {
		'ngInject';

		this.category = category.getList().find((n) => {
			return n.key === $stateParams.category;
		});


		this.trios = projects.filter(n => {
			if (n.type !== this.category.key) {
				return false;
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
	}
};
