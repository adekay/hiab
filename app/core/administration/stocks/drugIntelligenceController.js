(function () {
    'use strict';

    angular.module('app.administration.drugIntelligence', [])

        .controller('DrugIntelligenceController', DrugIntelligenceController);

        DrugIntelligenceController.$inject = ['$log'];

    function DrugIntelligenceController($log) {
        var vm = this;
    }
})();