'use strict';

angular.module('rsliteapp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('characteristics', {
                url: '/characteristics',
                templateUrl: 'modules/characteristics/views/characteristics.view.html',
                controller: 'ContactCtrl'
        });
    });
