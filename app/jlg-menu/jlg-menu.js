import './jlg-menu.scss';

const app = angular.module('jlg-menu', []);

app.component('jlgHamburger', {
    template: '<i class="fa fa-bars" aria-hidden="true"></i>',
    controller: function JLGHamburgerCtrl($element) {
        const body = angular.element(document.body);
        const menu = angular.element(document.querySelector('.jlg-hamburger-menu'));
        this.switch = function() {
            if (body.hasClass('jlg-hamburger-on')) {
                this.off();
            } else {
                this.on();
            }
        };

        this.on = () => {
            body.addClass('jlg-hamburger-on');
        };
        this.off = () => {
            body.removeClass('jlg-hamburger-on');
        };

        this.$onInit = () => {
            $element.on('click', () => {
                this.switch();
            });
            menu.on('click', () => {
                this.off();
            });
        };
    }
});