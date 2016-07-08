'use strict';

angular.module('rsliteapp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/views/contact.view.html',
                controller: 'ContactCtrl'
        });
    });
