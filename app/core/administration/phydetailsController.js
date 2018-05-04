(function () {
    'use strict';

    angular.module('app.administration.physicians.phydetails', [])

        .controller('PhydetailsController', PhydetailsController);

        PhydetailsController.$inject = ['$log'];

    function PhydetailsController($log) {
        var vm = this;
    }
})();