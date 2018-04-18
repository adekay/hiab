(function () {
    'use strict';

    angular.module('app.form', [])

        .controller('FormController', FormController);

    FormController.$inject = ['$log'];

    function FormController($log) {
        var vm = this;

        var date = new Date();
        vm.contactForm = {
            date: date
        };
        vm.update = update;

        function update(contact) {
            vm.contactForm = angular.copy(contact);
        }

        retrieves();

        function retrieves() {
            $log.info('Retrieved Todos vv');
        }
    }
})();