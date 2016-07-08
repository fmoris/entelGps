'use strict';
angular.module('rsliteapp')
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('inicio', {
                    url: '/inicio',
                    templateUrl: 'modules/home/views/home.view.html',
                    controller: 'InicioCtrl'
                });
        }
    ]);