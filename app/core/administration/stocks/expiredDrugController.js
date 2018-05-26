(function () {
    'use strict';

    angular.module('app.administration.expiredDrug', [])

        .controller('ExpiredDrugController', ExpiredDrugController);

        ExpiredDrugController.$inject = ['$log'];

    function ExpiredDrugController($log) {
        var vm = this;
    }
})();