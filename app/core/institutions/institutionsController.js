(function () {
    'use strict';

    angular.module('app.institutions', [])

        .controller('InstitutionsController', InstitutionsController);

        InstitutionsController.$inject = ['$log'];

    function InstitutionsController($log) {
        var vm = this;
    }
})();