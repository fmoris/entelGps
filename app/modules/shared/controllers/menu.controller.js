'use strict';

angular.module('rsliteapp')
    .controller('menuCtrl', function($localStorage, $scope, $rootScope) {
        $scope.oneAtATime = true;

        $scope.items = [{
            name: "Página de Inicio",
            link: "inicio",
            subitems: [{
                name: "Ubicar Móvil",
                link: "searchMovil.inicio"
            }, {
                name: "Reportes",
                link: "reports.inicio"
            }, {
                name: "Alarmas",
                link: "alarms.inicio"
            }, {
                name: "Control de Rutas y Clientes",
                link: "clientsRoutes.inicio"
            }]
        }, {
            name: "Visualizadores",
            link: "visualizers.inicio",
            subitems: [{
                name: "Visualizador 2",
                link: "Sub-Item 1"
            }, {
                name: "Visualizador 3",
                link: "Sub-Item 2"
            }, {
                name: "Visualizador 4",
                link: "Sub-Item 2"
            }]
        }, {
            name: "Mi Cuenta",
            link: "Item 3",
            subitems: [{
                name: "Administración de Móviles",
                link: "Sub-Item 1"
            }, {
                name: "Administración de Usuarios",
                link: "Sub-Item 2"
            }, {
                name: "Administración de Información",
                link: "Sub-Item 2"
            }]            
        }, {
        	name: "Preguntas Frecuentes",
        	link: "askedQuestion.inicio"
        },{
        	name: "Ayuda",
        	link: "help.inicio"
        },{
        	name: "Contacto y Soporte",
        	link: "contactSuport.inicio"
        }];

        $scope.$parent.isopen = ($scope.$parent.default === $scope.item);
 
                $scope.$watch('isopen', function (newvalue, oldvalue, scope) {
                    $scope.$parent.isopen = newvalue;
                });



    });