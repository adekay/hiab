(function () {
    'use strict';

    angular.module('app.settlement.breakdown', [])

        .controller('BreakdownController', BreakdownController);

        BreakdownController.$inject = ['$log'];

    function BreakdownController($log) {
        var vm = this;
    }
})();