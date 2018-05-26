(function () {
    'use strict';

    angular.module('app.administration.stockBalance', [])

        .controller('StockBalanceController', StockBalanceController);

        StockBalanceController.$inject = ['$log'];

    function StockBalanceController($log) {
        var vm = this;
    }
})();