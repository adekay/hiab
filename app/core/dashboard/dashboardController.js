(function () {
    'use strict';

    angular.module('app.dashboard', [])

        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$log'];

    function DashboardController($log) {
        var vm = this;
    }
})();