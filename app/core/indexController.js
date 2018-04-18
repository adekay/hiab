(function () {
    'use strict';

    angular.module('app.index', ['app.todosService'])

            .controller('IndexController', IndexController);

    IndexController.$inject = ['$log', 'todosService','$state'];

    function IndexController($log, todosService, $state) {
        var vm = this;

        vm.todos = [];

        retrieve();

        function retrieve() {
            return getTodos().then(function () {
                $log.info('Retrieved Todos');
            });
        }

        function getTodos() {
            return todosService.getTodos()
                    .then(function (data) {
                        vm.todos = data;
                        return vm.todos;
                    });
        }

        vm.getClass = getClass;
        vm.navOff = navOff;
        vm.navOn = navOn;
        vm.searchToggle = searchToggle;

        function getClass(path) {
            if ($state.current.name.substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }

        function navOff() {
            $('.side-menu').hide('slow');
            $('.top-bar').animate({left: '0px'}, 'slow');
            $('.page').animate({marginLeft: '0px'}, 'slow');
            $('.toggle-button.on').show('slow');
            $('.toggle-button.off').hide('slow');
        }

        function navOn() {
            $('.side-menu').show('slow');
            $('.top-bar').animate({left: '130px'}, 'slow');
            $('.page').animate({marginLeft: '130px'}, 'slow');
            $('.toggle-button.on').hide('slow');
            $('.toggle-button.off').show('slow');
        }

        function searchToggle() {
            $('.tools .search .input-group').fadeToggle('slow');
        }
    }
})();