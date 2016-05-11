(function() {
    'use strict';

    angular
        .module('zlimsui')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $stateProvider
            .state("home.autocomplete", {
                url: "/autocomplete",
                controller: "AutocompleteCtrl",
                controllerAs: 'auto',
                templateUrl: "app/demo/autocomplete/autucomplete.html"
            })

        $urlRouterProvider.otherwise('/');
    }

})();
