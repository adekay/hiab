(function () {
    'use strict';

    angular.module('app.administration.drugPerDisease', [])

        .controller('DrugPerDiseaseController', DrugPerDiseaseController);

        DrugPerDiseaseController.$inject = ['$log'];

    function DrugPerDiseaseController($log) {
        var vm = this;
    }
})();