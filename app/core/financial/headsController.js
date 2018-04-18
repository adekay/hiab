(function () {
    'use strict';

    angular.module('app.financial.heads', [])

        .controller('HeadsController', HeadsController);

        HeadsController.$inject = ['$log'];

    function HeadsController($log) {
        var vm = this;
    }
})();