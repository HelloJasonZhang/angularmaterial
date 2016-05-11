(function() {
  'use strict';

  angular
    .module('zlimsui')
    .controller('AutocompleteCtrl', AutocompleteCtrl);

  /** @ngInject */
  function AutocompleteCtrl($timeout,$mdSidenav, $log, toastr) {
    var vm = this;

    vm.classAnimation = '';

    activate();
   
    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

      
  }
})();
