(function () {
    'use strict';

    angular.module('app.settlement.advice', [])

        .controller('AdviceController', AdviceController);

        AdviceController.$inject = ['$log'];

    function AdviceController($log) {
        var vm = this;
    }
})();