(function () {
    'use strict';

    angular.module('app.financial.revenue', [])

        .controller('RevenueController', RevenueController);

        RevenueController.$inject = ['$log'];

    function RevenueController($log) {
        var vm = this;
    }
})();