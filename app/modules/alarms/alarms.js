'use strict';

angular.module('rsliteapp')
    .config(['$stateProvider',function ($stateProvider) {
        $stateProvider
            .state('alarms', {
                abstract : true,
                url: '/alarmas',
                templateUrl: 'modules/alarms/views/alarms.view.html'
            })
            .state('alarms.inicio', {
                url: '/inicio',
                templateUrl: 'modules/alarms/views/inicio.view.html',
                controller : 'alarmsCtrl'
            })
            .state('alarms.advanced', {
                url: '/avanzadas',
                templateUrl: 'modules/alarms/views/advanced.view.html',
                controller : 'advancedCtrl'
            })
            .state('alarms.preset', {
                url: '/predefinidas',
                templateUrl: 'modules/alarms/views/preset.view.html',
                controller : 'presetCtrl'
            })
            .state('alarms.notificationAdministrator', {
                url: '/notificaciones',
                templateUrl: 'modules/alarms/views/notificationAdministrator.view.html',
                controller : 'notificationAdministratorCtrl'
            })
            .state('alarms.ocurredInform', {
                url: '/informes',
                templateUrl: 'modules/alarms/views/ocurredInform.view.html',
                controller : 'ocurredInformCtrl'
            })
    }]);
