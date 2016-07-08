'use strict';

angular.module('rsliteapp')
    .controller('InicioCtrl', function($localStorage, $scope, $rootScope) {
    	$rootScope.menuLateral = true;
    	$scope.titulo= 'Página de Inicio';
    	$scope.menu = [
	    	{
	    		titulo: 'Ubicar Móvil',
	    		icono: '../../images/icons/ubicar_movil.png',
	    		descripcion: 'Permite visualizar la última posición del móvil registrada en el sistema, la última posición en línea y la ruta',
	    		link: 'searchMovil.inicio'
	    	},
	    	{
	    		titulo: 'Reportes',
	    		icono: '../../images/icons/reportes.png',
	    		descripcion: 'Visualización de Reportes de Móviles',
	    		link: 'Reportes.inicio'
	    	},
	    	{
	    		titulo: 'Alarmas',
	    		icono: '../../images/icons/mi_cuenta.png',
	    		descripcion: 'Herramientas comunes de administración',
	    		link: 'Alarmas.inicio'
	    	},
	    	{
	    		titulo: 'Control de Rutas y Clientes',
	    		icono: '../../images/icons/control_rutas_clientes.png',
	    		descripcion: 'Permite al Administrador de Flotas de empresa , controlar , modificar , consultar informacion de las Rutas que los vehiculos de la empresa ejecutan.',
	    		link: 'ControlRutas.inicio'
	    	},
	    	{
	    		titulo: 'Visualizadores',
	    		icono: '../../images/icons/ubicar_movil.png',
	    		descripcion: 'Visualizar Mobiles',
	    		link: 'Visualizadores.inicio'
	    	},
	    	{
	    		titulo: 'Mi Cuenta',
	    		icono: '../../images/icons/mi_cuenta.png',
	    		descripcion: 'Administrar Cuenta',
	    		link: 'MiCuenta.inicio'
	    	},
    	];
    	
    });
