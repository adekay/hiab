(function () {
    'use strict';

    angular.module('app.administration.physicians', [])

        .controller('PhysiciansController', PhysiciansController);

        PhysiciansController.$inject = ['$log'];

    function PhysiciansController($log) {
        var vm = this;
    }
})();