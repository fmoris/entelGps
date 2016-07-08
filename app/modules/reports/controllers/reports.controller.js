'use strict';

angular.module('rsliteapp')
    .controller('ReportsCtrl', function ($scope, $state, $timeout) {
        $scope.titulo = 'Reportes';
        $scope.menu = [
            {
                titulo: 'Listado de Eventos',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite Visualizar listados de eventos por vehiculos',
                link: 'reports.listEvents'
            },
            {
                titulo: 'Listado de Eventos a Excel',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite exportar a excel listados de eventos por vehiculos o grupos de móviles',
                link: 'reports.listEventsExcel'
            },
            {
                titulo: 'Consolidados',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Visualización de Reportes',
                link: 'reports.consolidated'
            },
            {
                titulo: 'Excesos Velocidad y Uso Fuera de Horario',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite emitir Reporte Excesos Velocidad y Uso Fuera de Horario',
                link: 'reports.speedLimitOutSchedule'
            },
            {
                titulo: 'Listado de Eventos EDL',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite Visualizar listados de Eventos EDL por vehículo',
                link: 'reports.edlListEvent'
            },
            {
                titulo: 'Estadisticas Diarias Consumo y Rendimiento EDL',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite Visualizar listados Estadisticas Diarias Consumo y Rendimiento EDL',
                link: 'reports.edlListEvent'
            },
            {
                titulo: 'Kilómetros Recorridos',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Kilómetros Recorridos',
                link: 'reports.travelKilometers'
            },
            {
                titulo: 'Kilómetros Recorridos x Día',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Kilómetros Recorridos x Día',
                link: 'reports.travelKilometersDays'
            },
            {
                titulo: 'Configuración de Reportes',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Permite agregar o eliminar Calendarización de reportes programados',
                link: 'reports.reportConfigs'
            },
            {
                titulo: 'Actividad de Motor',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Muestra detalle de Actividad de Motor',
                link: 'reports.engineActivity'
            },
            {
                titulo: 'Costo por Distancia',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de consumo de combustible',
                link: 'reports.distanceCost'
            },
            {
                titulo: 'Apagado y Encendido de Motor',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Apagado y Encendido de Motor',
                link: 'reports.onOffEngine'
            },
            {
                titulo: 'Estado de Móviles',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Estado de Moviles',
                link: 'reports.MovilStats'
            },
            {
                titulo: 'Actividad de Motor x Día',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Actividad de Motor por Día',
                link: 'reports.engineActivityDay'
            },
            {
                titulo: 'Detenciones',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Detenciones',
                link: 'reports.detentions'
            },
            {
                titulo: 'Costo de Mantenimiento',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Costo de Mantenimiento',
                link: 'reports.mantenimentCost'
            },
            {
                titulo: 'Últimas Pociciones por Vehículos',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Últimas Pociciones por Vehículos',
                link: 'reports.lastPositionvehicles'
            },
            {
                titulo: 'Vehículos sin Posición GPS',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reporte de Vehículos sin Posición GPS',
                link: 'reports.noGpsVehicles'
            },
            {
                titulo: 'Estado de Mantenimiento',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Muestra el Estado de Mantenimiento de los Moviles',
                link: 'reports.stateMaintenance'
            },
            {
                titulo: 'Viajes',
                icono: '../../images/icons/reportes.png',
                descripcion: 'Reportes de Viajes',
                link: 'reports.travels'
            },
        ];
    });