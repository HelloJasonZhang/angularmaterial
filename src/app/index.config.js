(function() {
    'use strict';

    angular
        .module('zlimsui')
        .config(config);

    /** @ngInject */
    function config($logProvider, $mdThemingProvider, $mdIconProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        $mdIconProvider
            .defaultIconSet("./assets/images/svg/avatars.svg", 128)
            .icon("menu", "./assets/images/svg/menu.svg", 24)
            .icon("share", "./assets/images/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }

})();
