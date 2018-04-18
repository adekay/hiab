(function () {
    'use strict';

    angular.module('app.administration.physicians.pdetails', [])

        .controller('PdetailsController', PdetailsController);

        PdetailsController.$inject = ['$log'];

    function PdetailsController($log) {
        var vm = this;
    }
})();