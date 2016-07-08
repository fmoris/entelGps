'use strict';

angular.module('rsliteapp')
    .controller('alarmsCtrl', function ($scope, $state) {
        $scope.titulo= 'Alarmas';
        $scope.menu = [
            {
                titulo: 'Alarmas Avanzadas',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite Configurar los Tipos de Alarmas y sus Notificaciones',
                link: 'alarms.advanced'
            },
            {
                titulo: 'Recorrido',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Alarmas predefinidas',
                link: 'alarms.preset'
            },
            {
                titulo: 'Administración de Alarmas',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite administrar los destinatarios a notificar',
                link: 'alarms.notificationAdministrator'
            },
            {
                titulo: 'Informes de Alarmas Ocurridas',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite Emitir un Informe de Alarmas Ocurridas',
                link: 'alarms.ocurredInform'
            },        
        ];   
});
