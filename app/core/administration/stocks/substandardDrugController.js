(function () {
    'use strict';

    angular.module('app.administration.substandardDrug', [])

        .controller('SubstandardDrugController', SubstandardDrugController);

        SubstandardDrugController.$inject = ['$log'];

    function SubstandardDrugController($log) {
        var vm = this;
    }
})();