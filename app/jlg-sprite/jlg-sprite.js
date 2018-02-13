import '../jlg-load-image/jlg-load-image.js';

const app = angular.module('jlg-sprite', ['jlg-load-image']);

app.run((loadImage) => {
    'ngInject';
    loadImage.load('./wpk/sprite.jpg').then(images => {
        angular.element(document.body).addClass('sprite-loaded');
    }).catch(error => {
        console.error('error', error);
    });
});