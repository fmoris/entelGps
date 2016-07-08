'use strict';

angular.module('rsliteapp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('comercialInfo', {
                url: '/comercialInfo',
                templateUrl: 'modules/comercialInfo/views/comercialInfo.view.html',
                controller: 'ContactCtrl'
        });
    });
