'use strict';

angular.module('rsliteapp')
      .controller('DriversPanelCtrl', function (NgTableParams,$scope,$mdDialog, $mdMedia) {
        $scope.data = [
            {
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },{
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },
            {
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },{
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },
            {
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },{
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },
            {
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            },{
                nombre: "Solange",
                apellido: "Tastes",
                identificador: "23423",
                tipoSensor: "default",
                idSensor: "343249",
                celular: "+5692974043",
                tipoLicencia: "default",
                vencimientoLicencia: "28/10/2014",
                editar: true,
                eliminar: true
            }
        ];
        $scope.cols = [
            {field: "nombre", title: "Nombre", filter: {nombre: "text"}, show: true},
            {field: "apellido", title: "Apellido", filter: {apellido: "number"}, show: true},
            {field: "identificador", title: "Identificador", filter: {identificador: "number"}, show: true},
            {field: "tipoSensor", title: "Tipo Sensor", filter: {tipoSensor: "text"}, show: true},
            {field: "idSensor", title: "Id Sensor", filter: {idSensor: "text"}, show: true},
            {field: "celular", title: "Celular", filter: {celular: "text"}, show: true},
            {field: "tipoLicencia", title: "Tipo Licencia", filter: {tipoLicencia: "text"}, show: true},
            {field: "vencimientoLicencia", title: "Vencimiento Licencia", show: true},
            {field: "editar", title: "Editar", show: true},
            {field: "eliminar", title: "Eliminar", show: true}
        ];
        $scope.tableParams = new NgTableParams({
            page: 1,
            total: 1,
            count: 6
        }, {
            dataset: $scope.data
        });

        $scope.hide = function() {
            $mdDialog
.hide();
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
            , templateUrl: 'modules/administration/views/fleets.tmpl.html'
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
