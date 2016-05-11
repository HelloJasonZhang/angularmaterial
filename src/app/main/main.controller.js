(function() {
  'use strict';

  angular
    .module('zlimsui')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$mdSidenav, $log, $state, webDevTec, toastr, userService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.users = [];
    vm.classAnimation = '';
    vm.creationDate = 1462888833594;
    vm.showToastr = showToastr;
    vm.selectUser = selectUser;
    vm.toggleList = toggleList;
    vm.go = go;

    activate();
    activateUser();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function activateUser() {
     userService
            .loadAllUsers()
            .then( function( users ) {
              vm.users    = [].concat(users);
              vm.selected = users[1];
            });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      vm.selected = angular.isNumber(user) ? vm.users[user] : user;
    } 

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleList() {
     
      $mdSidenav('left').toggle();
    }

    function go(path, title) {
       $log.info('path=' + path + " name=" + title);
        $state.go(path);
        vm.title = title;
    }
      
  }
})();
