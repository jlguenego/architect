import realisationHtml from './tmpl/realisation.html';

export const realisationRoute = {
    template: realisationHtml,
    controller: function RealisationCtrl(projects) {
        'ngInject';
        console.log('projects', projects);

        this.list = projects.reduce((acc, n, i) => {
            if (i % 3) {
                acc[acc.length - 1].push(n);
            } else {
                acc.push([n]);
            }
            return acc;
        }, []);
        console.log('this.list', this.list);
    }
};