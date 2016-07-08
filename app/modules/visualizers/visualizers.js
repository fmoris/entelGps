'use strict';

angular.module('rsliteapp')
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('visualizers', {
                    abstract: true,
                    url: '/visualizadores',
                    templateUrl: 'modules/visualizers/views/visualizers.view.html'
                })
                .state('visualizers.inicio', {
                    url: '/inicio',
                    templateUrl: 'modules/visualizers/views/inicio.view.html',
                    controller: 'visualizersCtrl'
                })
                .state('visualizers.visualizers2', {
                    url: '/visualizador2',
                    templateUrl: 'modules/visualizers/views/visualizers2.view.html',
                    controller: 'visualizers2Ctrl'
                })
                .state('visualizers.visualizers3', {
                    url: '/visualizador3',
                    templateUrl: 'modules/visualizers/views/visualizers3.view.html',
                    controller: 'visualizers3Ctrl'
                })
                .state('visualizers.visualizers4', {
                    url: '/visualizador4',
                    templateUrl: 'modules/visualizers/views/visualizers4.view.html',
                    controller: 'visualizers4Ctrl'
                })
        }
    ]);