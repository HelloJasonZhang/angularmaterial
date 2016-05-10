(function() {
  'use strict';

  angular
    .module('zlimsui')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($mdSidenav,$log,moment) {
      var vm = this;
      vm.toggleList = toggleList;


      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      /**
       * Hide or Show the 'left' sideNav area
       */
      function toggleList() {
        $log.info(' NavbarController $mdSidenav=');
        $mdSidenav('left').toggle();
      }
    }
  }

})();
