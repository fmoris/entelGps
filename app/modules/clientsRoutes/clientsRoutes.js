'use strict';

angular.module('rsliteapp')
    .config(['$stateProvider',function ($stateProvider) {
        $stateProvider
            .state('clientsRoutes', {
                abstract : true,
                url: '/rutasClientes',
                templateUrl: 'modules/clientsRoutes/views/clientsRoutes.view.html'
            })
            .state('clientsRoutes.inicio', {
                url: '/inicio',
                templateUrl: 'modules/clientsRoutes/views/inicio.view.html',
                controller : 'clientsRoutesCtrl'
            })
            .state('clientsRoutes.geocercasAdminGroup', {
                url: '/administracionGruposGeocercas',
                templateUrl: 'modules/clientsRoutes/views/geocercasAdminGroup.view.html',
                controller : 'geocercasAdminGroupCtrl'
            })
            .state('clientsRoutes.geocercasAdmin', {
                url: '/administracionGeocercas',
                templateUrl: 'modules/clientsRoutes/views/geocercasAdmin.view.html',
                controller : 'geocercasAdminCtrl'
            })
            .state('clientsRoutes.routesAsignAdmin', {
                url: '/administracionRutasAsignaciones',
                templateUrl: 'modules/clientsRoutes/views/routesAsignAdmin.view.html',
                controller : 'routesAsignAdminCtrl'
            })
            .state('clientsRoutes.masiveCharge', {
                url: '/cargaMasiva',
                templateUrl: 'modules/clientsRoutes/views/masiveCharge.view.html',
                controller : 'masiveChargeCtrl'
            })
            .state('clientsRoutes.routeControl', {
                url: '/controlRuta',
                templateUrl: 'modules/clientsRoutes/views/routeControl.view.html',
                controller : 'routeControlCtrl'
            })
            .state('clientsRoutes.excessZone', {
                url: '/controlRuta',
                templateUrl: 'modules/clientsRoutes/views/excessZone.view.html',
                controller : 'excessZoneCtrl'
            })
            .state('clientsRoutes.clientReports', {
                url: '/reporteClientes',
                templateUrl: 'modules/clientsRoutes/views/clientReports.view.html',
                controller : 'clientReportsCtrl'
            })
            .state('clientsRoutes.plantStay', {
                url: '/estadiaPlanta',
                templateUrl: 'modules/clientsRoutes/views/plantStay.view.html',
                controller : 'plantStayCtrl'
            })
            .state('clientsRoutes.clientStay', {
                url: '/estadiaCliente',
                templateUrl: 'modules/clientsRoutes/views/clientStay.view.html',
                controller : 'clientStayCtrl'
            })
            .state('clientsRoutes.qualityService', {
                url: '/calidadServicio',
                templateUrl: 'modules/clientsRoutes/views/qualityService.view.html',
                controller : 'qualityServiceCtrl'
            })
            .state('clientsRoutes.notifyBreachRoute', {
                url: '/notificacionIncumplimientoRuta',
                templateUrl: 'modules/clientsRoutes/views/notifyBreachRoute.view.html',
                controller : 'notifyBreachRouteCtrl'
            })
            .state('clientsRoutes.informNotifyBreachRoute', {
                url: '/informeRutaIncumplida',
                templateUrl: 'modules/clientsRoutes/views/InformNotifyBreachRoute.view.html',
                controller : 'informNotifyBreachRouteCtrl'
            })
            .state('clientsRoutes.hreInform', {
                url: '/informeHre',
                templateUrl: 'modules/clientsRoutes/views/hreInform.view.html',
                controller : 'hreInformCtrl'
            })
    }]);
