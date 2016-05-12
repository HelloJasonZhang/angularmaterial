(function(){
  'use strict';

  angular
      .module('zlimsui')
      .service('userService', userService);

   /** @ngInject */
  function userService($q){
    var users = [
      {
        name: 'autocompelte',
        path: 'home.autocomplete',
        avatar: ''
      },
      {
        name: 'button sheet',
        path: 'home.buttonsheet',
        avatar: ''
      },
      {
        name: 'button',
        avatar: ''
      },
      {
        name: 'card',
        avatar: ''
      },
      {
        name: 'checkbox',
        avatar: ''
      },
      {
        name: 'chips',
        avatar: ''
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();