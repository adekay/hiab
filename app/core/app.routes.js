(function () {
    'use strict';

    angular.module('app')

        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/dashboard');
        $urlRouterProvider.when('/', '/dashboard');
        $urlRouterProvider.when('/epidemiological', '/epidemiological/pictograph');
        $urlRouterProvider.when('/epidemiological/', '/epidemiological/pictograph');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Home',
                    breadcrumb: 'Home'
                },
                views: {
                    'header': {
                        templateUrl: 'core/navigation/headerView.html',
                        controller: 'HeaderController',
                        controllerAs: 'HC'
                    },
                    'menu': {
                        templateUrl: 'core/navigation/menuView.html',
                        controller: 'MenuController',
                        controllerAs: 'MC'
                    },
                    'breadcrumbs': {
                        templateUrl: 'core/navigation/breadcrumbsView.html',
                        controller: 'BreadcrumbsController',
                        controllerAs: 'BC'
                    },
                    'content': {
                        template: 'Choose option from menu...'
                    },
                    'footer': {
                        templateUrl: 'core/navigation/footerView.html',
                        controller: 'FooterController',
                        controllerAs: 'FC'
                    }
                }
            })
            .state('root.todos', {
                abstract: true,
                url: 'todos',
                data: {
                    title: 'Todos',
                    breadcrumb: 'Todos'
                }
            })
            .state('root.todos.list', {
                url: '/list',
                data: {
                    title: 'To-do list',
                    breadcrumb: 'List'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/todos/listView.html',
                        controller: 'TodosListController',
                        controllerAs: 'TLC'
                    }
                }
            })
            .state('root.todos.new', {
                url: '/new',
                data: {
                    title: 'New todo',
                    breadcrumb: 'New'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/todos/newView.html',
                        controller: 'TodosNewController',
                        controllerAs: 'TNC'
                    }
                }
            })
            .state('root.json', {
                url: 'json',
                data: {
                    title: 'Json',
                    breadcrumb: 'Json'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/json/jsonView.html',
                        controller: 'JsonController',
                        controllerAs: 'JC'
                    }
                }
            })
            .state('root.mountains', {
                abstract: true,
                url: 'mountains',
                data: {
                    title: 'Mountains',
                    breadcrumb: 'Mountains'
                }
            })
            .state('root.mountains.list', {
                url: '/list',
                data: {
                    title: 'List of mountains',
                    breadcrumb: 'List'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/mountains/listView.html',
                        controller: 'MountainsListController',
                        controllerAs: 'MLC'
                    }
                }
            })
            .state('root.mountains.mountain', {
                abstract: true,
                url: '/:mountainId',
                data: {
                    title: '[Mountain name]',
                    breadcrumb: '[Mountain name]'
                }
            })
            .state('root.mountains.mountain.details', {
                url: '/details',
                data: {
                    title: 'Mountain details',
                    breadcrumb: 'Details'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/mountains/detailsView.html',
                        controller: 'MountainsDetailsController',
                        controllerAs: 'MDC'
                    }
                }
            })
            .state('root.form', {
                url: 'form',
                data: {
                    title: 'Form',
                    breadcrumb: 'Form'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/form/formView.html',
                        controller: 'FormController',
                        controllerAs: 'FC'
                    }
                }
            })
            .state('root.dashboard', {
                url: 'dashboard',
                data: {
                    title: 'dashboard',
                    breadcrumb: 'dashboard'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'DBC'
                    }
                }
            })
            .state('root.epidemiological', {
                abstract: true,
                url: 'epidemiological',
                data: {
                    title: 'Epidemiological',
                    breadcrumb: 'Epidemiological'
                }
            })
            .state('root.epidemiological.pictograph', {
                url: '/pictograph',
                data: {
                    title: 'Health Pictograph',
                    breadcrumb: 'Health Pictograph'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/epidemiological/pictograph.html',
                        controller: 'PictographController',
                        controllerAs: 'EPC'
                    }
                }
            })
            .state('root.epidemiological.cases', {
                url: '/cases',
                data: {
                    title: 'Reported Cases',
                    breadcrumb: 'Reported Cases'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/epidemiological/cases.html',
                        controller: 'CasesController',
                        controllerAs: 'ECC'
                    }
                }
            })
            .state('root.epidemiological.trends', {
                url: '/trends',
                data: {
                    title: 'Health Trends',
                    breadcrumb: 'Health Trends'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/epidemiological/trends.html',
                        controller: 'TrendsController',
                        controllerAs: 'ETC'
                    }
                }
            })
            .state('root.settlement', {
                abstract: true,
                url: 'settlement',
                data: {
                    title: 'settlement',
                    breadcrumb: 'settlement'
                }
            })
            .state('root.settlement.breakdown', {
                url: '/breakdown',
                data: {
                    title: 'Revenue Breakdown',
                    breadcrumb: 'Revenue Breakdown'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/settlement/breakdown.html',
                        controller: 'BreakdownController',
                        controllerAs: 'SBC'
                    }
                }
            })
            .state('root.settlement.advice', {
                url: '/advice',
                data: {
                    title: 'Settlement Advice',
                    breadcrumb: 'Settlement Advice'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/settlement/advice.html',
                        controller: 'AdviceController',
                        controllerAs: 'SAC'
                    }
                }
            })
            .state('root.financial', {
                abstract: true,
                url: 'financial',
                data: {
                    title: 'financial',
                    breadcrumb: 'financial'
                }
            })
            .state('root.financial.revenue', {
                url: '/revenue',
                data: {
                    title: 'FHI Revenue',
                    breadcrumb: 'FHI Revenue'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/financial/revenue.html',
                        controller: 'RevenueController',
                        controllerAs: 'FRC'
                    }
                }
            })
            .state('root.financial.heads', {
                url: '/heads',
                data: {
                    title: 'Revenue Heads',
                    breadcrumb: 'Revenue Heads'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/financial/heads.html',
                        controller: 'HeadsController',
                        controllerAs: 'FHC'
                    }
                }
            })
            .state('root.administration', {
                url: 'administration',
                data: {
                    title: 'Hospital Administration',
                    breadcrumb: 'Hospital Administration'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/administration/administration.html',
                        controller: 'AdministrationController',
                        controllerAs: 'AC'
                    }
                }
            })
            .state('root.administration.physicians', {
                url: '/physicians',
                data: {
                    title: 'Hospital Administration Physicians',
                    breadcrumb: 'Hospital Administration Physicians'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/administration/physicians.html',
                        controller: 'PhysiciansController',
                        controllerAs: 'APC'
                    }
                }
            })
            .state('root.administration.physicians.pdetails', {
                url: '/pdetails',
                data: {
                    title: 'Hospital Administration Physician Details',
                    breadcrumb: 'Hospital Administration Physician Details'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/administration/pdetails.html',
                        controller: 'PdetailsController',
                        controllerAs: 'APDC'
                    }
                }
            });
    }
})();