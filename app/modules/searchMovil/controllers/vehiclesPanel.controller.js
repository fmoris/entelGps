'use strict';

angular.module('rsliteapp')
      .controller('VehiclesPanelCtrl', function (NgTableParams,$scope,$mdDialog, $mdMedia) {
        $scope.data = [
            {
                nombre: "Solange Tastes",
                gpsImei: "351802053737130",
                sim: "+5691234567",
                patente: "SL-TT",
                vin: "0129810000361839",
                ubicacion: "Curico 550-598 Santiago, Santiago",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "28/10/2014 18:40",
                odometro: "1901",
                horometro: "574,41",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id",
            },{
                nombre: "Francisco Moris",
                gpsImei: "051829854173710",
                sim: "+569531916038",
                patente: "FM-TX",
                vin: "1129814000361839",
                ubicacion: "Concepcion, Concepcion",
                empresa: "Reddsystem",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "04/04/2016 18:40",
                odometro: "1800",
                horometro: "232,77",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id"
            },
            {
                nombre: "Solange Tastes",
                gpsImei: "351802053737130",
                sim: "+5691234567",
                patente: "SL-TT",
                vin: "0129810000361839",
                ubicacion: "Curico 550-598 Santiago, Santiago",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "28/10/2014 18:40",
                odometro: "1901",
                horometro: "574,41",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id",
            },{
                nombre: "Francisco Moris",
                gpsImei: "051829854173710",
                sim: "+569531916038",
                patente: "FM-TX",
                vin: "1129814000361839",
                ubicacion: "Concepcion, Concepcion",
                empresa: "Reddsystem",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "04/04/2016 18:40",
                odometro: "1800",
                horometro: "232,77",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id"
            },
            {
                nombre: "Solange Tastes",
                gpsImei: "351802053737130",
                sim: "+5691234567",
                patente: "SL-TT",
                vin: "0129810000361839",
                ubicacion: "Curico 550-598 Santiago, Santiago",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "28/10/2014 18:40",
                odometro: "1901",
                horometro: "574,41",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id",
            },{
                nombre: "Francisco Moris",
                gpsImei: "051829854173710",
                sim: "+569531916038",
                patente: "FM-TX",
                vin: "1129814000361839",
                ubicacion: "Concepcion, Concepcion",
                empresa: "Reddsystem",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "04/04/2016 18:40",
                odometro: "1800",
                horometro: "232,77",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id"
            },
            {
                nombre: "Solange Tastes",
                gpsImei: "351802053737130",
                sim: "+5691234567",
                patente: "SL-TT",
                vin: "0129810000361839",
                ubicacion: "Curico 550-598 Santiago, Santiago",
                empresa: "Rastreosat",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "28/10/2014 18:40",
                odometro: "1901",
                horometro: "574,41",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id",
            },{
                nombre: "Francisco Moris",
                gpsImei: "051829854173710",
                sim: "+569531916038",
                patente: "FM-TX",
                vin: "1129814000361839",
                ubicacion: "Concepcion, Concepcion",
                empresa: "Reddsystem",
                fechaCreacion: "28/10/2014 18:40",
                fechaCertificacion: "28/10/2014 18:40",
                fechaUltimaActividad: "04/04/2016 18:40",
                odometro: "1800",
                horometro: "232,77",
                tipoMovil: "Default",
                subTipoMovil: "Default",
                tipoMotor: "Default",
                textoLibre: "asdsad",
                "editar": "id",
                "opciones": "opciones"
            }
        ];
        $scope.cols = [
            {field: "nombre", title: "Nombre", filter: {nombre: "text"}, show: true},
            {field: "gpsImei", title: "Gps Imei", filter: {gpsImei: "number"}, show: true},
            {field: "sim", title: "Nro Tarjeta Sim", filter: {sim: "number"}, show: true},
            {field: "patente", title: "Patente", filter: {patente: "text"}, show: true},
            {field: "vin", title: "Vin", filter: {vin: "text"}, show: true},
            {field: "ubicacion", title: "Ubicacion", filter: {ubicacion: "text"}, show: true},
            {field: "empresa", title: "Empresa", filter: {empresa: "text"}, show: true},
            {field: "fechaCreacion", title: "Fecha Creacion", show: false},
            {field: "fechaCertificacion", title: "Fecha Certificacion", show: false},
            {field: "fechaUltimaActividad", title: "Fecha Ultima Actividad", show: false},
            {field: "odometro", title: "Odometro", filter: {odometro: "number"}, show: true},
            {field: "horometro", title: "Horometro", filter: {horometro: "number"}, show: true},
            {field: "tipoMovil", title: "Tipo Movil", filter: {tipoMovil: "select"}, show: false},
            {field: "subTipoMovil", title: "Sub Tipo Movil", filter: {subTipoMovil: "text"}, show: false},
            {field: "tipoMotor", title: "Tipo Motor", filter: {tipoMotor: "text"}, show: false},
            {field: "textoLibre", title: "Texto Libre", filter: {textoLibre: "text"}, show: false},
            {field: "opciones", title: "Opciones", dataType: "acciones" ,show: true}
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
            , templateUrl: 'modules/administration/views/modals/vehicle.edit.html'
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
