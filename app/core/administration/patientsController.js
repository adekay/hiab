(function () {
    'use strict';

    angular.module('app.administration.patients', [])

        .controller('PatientsController', PatientsController);

        PatientsController.$inject = ['$log'];

    function PatientsController($log) {
        var vm = this;
    }
})();