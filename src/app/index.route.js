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
                controller: "AutocompleteController",
                controllerAs: 'ctrl',
                templateUrl: "app/demo/autocomplete/autucomplete.html"
            })
        $stateProvider
            .state("home.buttonsheet", {
                url: "/buttonsheet",
                controller: "ButtonsheetController",
                controllerAs: 'ctrl',
                templateUrl: "app/demo/buttonsheet/buttonsheet.html"
            })
        $urlRouterProvider.otherwise('/');
    }

})();
