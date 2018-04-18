(function () {
    'use strict';

    angular.module('app.administration', [])

        .controller('AdministrationController', AdministrationController);

        AdministrationController.$inject = ['$log'];

    function AdministrationController($log) {
        var vm = this;
    }
})();