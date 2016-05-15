(function() {
    'use strict';

    angular
        .module('zlimsui')
        .config(routerConfig)    //take all whitespace out of string
    .filter('nospace',nospaceFilter )
    //replace uppercase to regular case
    .filter('humanizeDoc',humanizeDocFilter);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state("home.autocomplete", {
                url: "/autocomplete",
                controller: "AutocompleteController",
                controllerAs: 'ctrl',
                templateUrl: "app/demo/autocomplete/autucomplete.html"
            })
            .state("home.resourcetemplate", {
                url: "/resourcetemplate",
                controller: "ResTemplateController",
                controllerAs: 'ctrl',
                templateUrl: "app/demo/resourcetemplate/resourcetemplate.html"
            })
        $urlRouterProvider.otherwise('/');
    }

    /** @ngInject */
    function nospaceFilter() {
     // body...
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    }

    /** @ngInject */
    function humanizeDocFilter() {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        return doc.label || doc.name;
      };
    }
})();
