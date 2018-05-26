(function () {
    'use strict';

    angular.module('app.administration.drugSales', [])

        .controller('DrugSalesController', DrugSalesController);

        DrugSalesController.$inject = ['$log'];

    function DrugSalesController($log) {
        var vm = this;
    }
})();