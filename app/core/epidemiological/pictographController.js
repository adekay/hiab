(function () {
    'use strict';

    angular.module('app.epidemiological.pictograph', [])

        .controller('PictographController', PictographController);

        PictographController.$inject = ['$log'];

    function PictographController($log) {
        var vm = this;
    }
})();