(function () {
    'use strict';

    angular.module('app.administration.drugSupply', [])

        .controller('DrugSupplyController', DrugSupplyController);

        DrugSupplyController.$inject = ['$log'];

    function DrugSupplyController($log) {
        var vm = this;
    }
})();