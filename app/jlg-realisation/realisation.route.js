import realisationHtml from './tmpl/realisation.html';

export const realisationRoute = {
    template: realisationHtml,
    controller: function RealisationCtrl(projects) {
        'ngInject';
        console.log('projects', projects);

        this.Eglisetrios = projects.filter(n => n.type === 'Eglise').reduce((acc, n, i) => {
            if (i % 3) {
                acc[acc.length - 1].push(n);
            } else {
                acc.push([n]);
            }
            return acc;
        }, []);
    }
};