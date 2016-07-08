'use strict';

angular.module('rsliteapp')
	.config(['$stateProvider',function ($stateProvider) {
	    $stateProvider
	        .state('reports', {
	        	abstract : true,
	            url: '/reportes',
	            templateUrl: 'modules/reports/views/reports.view.html'
	        })
	        .state('reports.inicio', {
	            url: '/inicio',
	            templateUrl: 'modules/reports/views/inicio.view.html',
	            controller : 'ReportsCtrl'
	        })
	        .state('reports.listEvents', {
	            url: '/listadoEventos',
	            templateUrl: 'modules/reports/views/listEvents.view.html',
	            controller : 'ListEventsCtrl'
	        })
	        .state('reports.listEventsExcel', {
	            url: '/listadoEventosExcel',
	            templateUrl: 'modules/reports/views/listEventsExcel.view.html',
	            controller : 'ListEventsExcelCtrl'
	        })
	        .state('reports.consolidated', {
	            url: '/consolidados',
	            templateUrl: 'modules/reports/views/consolidated.view.html',
	            controller : 'ConsolidatedCtrl'
	        })
	        .state('reports.speedLimitOutSchedule', {
	            url: '/ExcesoFueraHorario',
	            templateUrl: 'modules/reports/views/speedLimitOutSchedule.view.html',
	            controller : 'SpeedLimitOutSchedulePanelCtrl'
	        })
	        .state('reports.dailyStatusEdl', {
	            url: '/estadisticasDiariasEdl',
	            templateUrl: 'modules/reports/views/dailyStatusEdl.view.html',
	            controller : 'DailyStatusEdlCtrl'
	        }) 
	        .state('reports.edlListEvent', {
	            url: '/eventosEdl',
	            templateUrl: 'modules/reports/views/edlListEvent.view.html',
	            controller : 'EdlListEventCtrl'
	        })	        
	        .state('reports.travelKilometers', {
	            url: '/kilometrosRecorridos',
	            templateUrl: 'modules/reports/views/travelKilometers.view.html',
	            controller : 'TravelKilometersCtrl'
	        })
	        .state('reports.travelKilometersDays', {
	            url: '/kilometrosRecorridosDias',
	            templateUrl: 'modules/reports/views/travelKilometersDays.view.html',
	            controller : 'TravelKilometersDaysCtrl'
	        })
	        .state('reports.reportConfigs', {
	            url: '/configuracionReportes',
	            templateUrl: 'modules/reports/views/reportConfigs.view.html',
	            controller : 'reportConfigsCtrl'
	        })
	        .state('reports.engineActivity', {
	            url: '/actividadMotor',
	            templateUrl: 'modules/reports/views/engineActivity.view.html',
	            controller : 'engineActivityCtrl'
	        })
	        .state('reports.distanceCost', {
	            url: '/constoDistancia',
	            templateUrl: 'modules/reports/views/distanceCost.view.html',
	            controller : 'distanceCostCtrl'
	        })
	        .state('reports.onOffEngine', {
	            url: '/apagadoEncendidoMotor',
	            templateUrl: 'modules/reports/views/onOffEngine.view.html',
	            controller : 'onOffEngineCtrl'
	        })
	        .state('reports.MovilStats', {
	            url: '/estadoMoviles',
	            templateUrl: 'modules/reports/views/MovilStats.view.html',
	            controller : 'MovilStatsCtrl'
	        })
	        .state('reports.detentions', {
	            url: '/detenciones',
	            templateUrl: 'modules/reports/views/detentions.view.html',
	            controller : 'DetentionsCtrl'
	        })
	        .state('reports.mantenimentCost', {
	            url: '/costoMantenimiento',
	            templateUrl: 'modules/reports/views/mantenimentCost.view.html',
	            controller : 'mantenimentCostCtrl'
	        })
	        .state('reports.lastPositionvehicles', {
	            url: '/ultimasPosicionesVehiculo',
	            templateUrl: 'modules/reports/views/lastPositionvehicles.view.html',
	            controller : 'LastPositionvehiclesCtrl'
	        })
	        .state('reports.noGpsVehicles', {
	            url: '/vehiculosSinGps',
	            templateUrl: 'modules/reports/views/noGpsVehicles.view.html',
	            controller : 'noGpsVehiclesCtrl'
	        })
	        .state('reports.stateMaintenance', {
	            url: '/estadoMantenimento',
	            templateUrl: 'modules/reports/views/stateMaintenance.view.html',
	            controller : 'StateMaintenanceCtrl'
	        })
	        .state('reports.travels', {
	            url: '/viajes',
	            templateUrl: 'modules/reports/views/travels.view.html',
	            controller : 'TravelsCtrl'
	        })
    }]);