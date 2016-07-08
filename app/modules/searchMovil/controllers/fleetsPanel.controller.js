'use strict';

angular.module('rsliteapp')
    .controller('FleetsPanelCtrl', function (NgTableParams,$scope,$mdDialog, $mdMedia) {
        $scope.data = [
            {
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true

            },{
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },
            {
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },{
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },
            {
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },{
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },
            {
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            },{
                nombre: "Solange Tastes",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                "editar": "true",
                "eliminar": "true",
                "exportarUsuario": true,
                "exportarVehiculo": true
            }
        ];
        $scope.cols = [
            {field: "nombre", title: "Nombre", filter: {nombre: "text"}, show: true},
            {field: "empresa", title: "Empresa", filter: {empresa: "text"}, show: true},
            {field: "fechaCreacion", title: "Fecha Creacion", show: true},
            {field: "editar", title: "Editar", show: true},
            {field: "eliminar", title: "Eliminar", show: true},
            {field: "exportarUsuario", title: "Exportar Usuario", show: true},
            {field: "exportarVehiculo", title: "Exportar Vehiculo", show: true},

        ];
        $scope.tableParams = new NgTableParams({
            page: 1,
            total: 1,
            count: 6
        }, {
            dataset: $scope.data
        });

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    /*
        Ventana Editar
    */
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

    $scope.showAdvanced = function (ev,user) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
            controller: DialogController
            , templateUrl: 'modules/administration/views/modals/fleets.edit.html'
            , parent: angular.element(document.body)
            , targetEvent: ev
            , clickOutsideToClose: false
            , fullscreen: useFullScreen
            ,   locals: {
                    items: angular.copy(user)
                }
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    $scope.$watch(function () {
        return $mdMedia('xs') || $mdMedia('sm');
    }, function (wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
    });
    };
    function DialogController($scope,$mdDialog,items) {
        $scope.usuario = items;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

});
