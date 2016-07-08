'use strict';

angular.module('rsliteapp')
    .controller('visualizersCtrl', function ($scope, $state) {
        $scope.titulo= 'Visualizadores';
        $scope.menu = [
            {
                titulo: 'Visualizador 2',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Administración Visualizador',
                link: 'visualizers.visualizers2'
            },
            {
                titulo: 'Visualizador 3',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Visualizador',
                link: 'visualizers.visualizers3'
            },
            {
                titulo: 'Beta Visualizador 4',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Visualizador',
                link: 'visualizers.visualizers4'
            }            
        ];   
});
