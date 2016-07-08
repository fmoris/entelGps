'use strict';

angular.module('rsliteapp')
	//servicio para mostrar un modal de alerta
    .factory('ErrorsHandlers', function($mdDialog, $localStorage, $state){
    	var showAlert = function (message){
	    	return $mdDialog.show(
		      	$mdDialog.alert()
		        	.parent(angular.element(document.querySelector('#popupContainer')))
			        .clickOutsideToClose(true)
			        .title('Error!')
			        .textContent(message)
			        .ok('Aceptar')
		    );
    	};
    	var sessionExpired = function (message){
	    	delete $localStorage.user;
            $state.go('login');
    	};
        return {
            showAlert : showAlert,
            sessionExpired : sessionExpired
        };
    });