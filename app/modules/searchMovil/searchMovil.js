'use strict';

angular.module('rsliteapp')
    .config(['$stateProvider',function ($stateProvider) {
        $stateProvider
            .state('searchMovil', {
                abstract : true,
                url: '/ubicarMovil',
                templateUrl: 'modules/searchMovil/views/searchMovil.view.html'
            })
            .state('searchMovil.inicio', {
                url: '/inicio',
                templateUrl: 'modules/searchMovil/views/inicio.view.html',
                controller : 'searchMovilCtrl'
            })
            .state('searchMovil.LastPosition', {
                url: '/ultimaPosicion',
                templateUrl: 'modules/searchMovil/views/lastPosition.view.html',
                controller : 'LastPositionPanelCtrl'
            })
            .state('searchMovil.travel', {
                url: '/recorrido',
                templateUrl: 'modules/searchMovil/views/travel.view.html',
                controller : 'TravelCtrl'
            })
            .state('searchMovil.onlineQuery', {
                url: '/consultaEnLinea',
                templateUrl: 'modules/searchMovil/views/onlineQuery.view.html',
                controller : 'onlineQuerylCtrl'
            })
}]);
