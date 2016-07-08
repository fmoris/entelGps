'use strict';

angular.module('rsliteapp')
    .controller('searchMovilCtrl', function ($scope, $state) {
        $scope.titulo= 'Úbicar Móvil';
        $scope.menu = [
            {
                titulo: 'Última Posición',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite visualizar la última posición de sis vehículos',
                link: 'searchMovil.lastPosition'
            },
            {
                titulo: 'Recorrido',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite reproducir sobre el mapa el desplazamiento de un móvil en un periodo de tiempo',
                link: 'searchMovil.travel'
            },
            {
                titulo: 'Consulta en Línea',
                icono: '../../images/icons/ubicar_movil.png',
                descripcion: 'Permite visualizar la posición actual del vehiculo',
                link: 'searchMovil.queryOnline'
            },           
        ];   
});
