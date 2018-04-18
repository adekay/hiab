(function () {
    'use strict';

    angular.module('app.epidemiological.trends', [])

        .controller('TrendsController', TrendsController);

        TrendsController.$inject = ['$log'];

    function TrendsController($log) {
        var vm = this;
    }
})();