(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.dashboard',
        'app.epidemiological.pictograph',
        'app.epidemiological.cases',
        'app.epidemiological.trends',
        'app.financial.revenue',
        'app.financial.heads',
        'app.settlement.breakdown',
        'app.settlement.advice',
        'app.administration',
        'app.administration.physicians',
        'app.administration.physicians.pdetails',
        'app.form',
        'app.json',
        'app.mountains.details',
        'app.mountains.list',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.todos.new',
        'app.todos.list',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();