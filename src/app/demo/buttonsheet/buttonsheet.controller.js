angular.module('zlimsui')
.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', './assets/images/icons/share-arrow.svg', 24)
      .icon('upload', './assets/images/icons/upload.svg', 24)
      .icon('copy', './assets/images/icons/copy.svg', 24)
      .icon('print', './assets/images/icons/print.svg', 24)
      .icon('hangout', './assets/images/icons/hangout.svg', 24)
      .icon('mail', './assets/images/icons/mail.svg', 24)
      .icon('message', './assets/images/icons/message.svg', 24)
      .icon('copy2', './assets/images/icons/copy2.svg', 24)
      .icon('facebook', './assets/images/icons/facebook.svg', 24)
      .icon('twitter', './assets/images/icons/twitter.svg', 24);
  })
.controller('ButtonsheetController', function($scope, $timeout, $mdBottomSheet, $mdToast) {
  $scope.alert = '';

  $scope.showListBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl'
    }).then(function(clickedItem) {
      $scope.alert = clickedItem['name'] + ' clicked!';
    });
  };

  $scope.showGridBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-grid-template.html',
      controller: 'GridBottomSheetCtrl',
      clickOutsideToClose: false
    }).then(function(clickedItem) {
      $mdToast.show(
            $mdToast.simple()
              .textContent(clickedItem['name'] + ' clicked!')
              .position('top right')
              .hideDelay(1500)
          );
    });
  };
})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy2' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.run(function($http, $templateCache) {

    var urls = [
      './assets/images/icons/share-arrow.svg',
      './assets/images/icons/upload.svg',
      './assets/images/icons/copy.svg',
      './assets/images/icons/print.svg',
      './assets/images/icons/hangout.svg',
      './assets/images/icons/mail.svg',
      './assets/images/icons/message.svg',
      './assets/images/icons/copy2.svg',
      './assets/images/icons/facebook.svg',
      './assets/images/icons/twitter.svg'
    ];

    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });

  });