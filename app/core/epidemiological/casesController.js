(function () {
    'use strict';

    angular.module('app.epidemiological.cases', [])

        .controller('CasesController', CasesController);

        CasesController.$inject = ['$log'];

    function CasesController($log) {
        var vm = this;
    }
})();