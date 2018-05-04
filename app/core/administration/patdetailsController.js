(function () {
    'use strict';

    angular.module('app.administration.patients.patdetails', [])

        .controller('PatdetailsController', PatdetailsController);

        PatdetailsController.$inject = ['$log'];

    function PatdetailsController($log) {
        var vm = this;
    }
})();