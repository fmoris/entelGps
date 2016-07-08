'use strict';

angular.module('rsliteapp')
    .controller('LoginCtrl', function ($state, $localStorage, $scope ,ApiLogin, ErrorsHandlers) {
        $scope.user = {
            user : '',
            pass : '',
            realm : 'entel',
            device : 'desktop'
        };
        $scope.login = function (user){
            console.log($scope.user);
            ApiLogin.getToken($scope.user).then(
                function (tokenResult, status){
                    if( tokenResult.statusText === 'OK' && tokenResult.status === 200){
                        var user = {
                            sessionId : tokenResult.data
                        };
                        ApiLogin.login(tokenResult.data).then(
                            function (loginResult, status){
                                $localStorage.user = angular.toJson(loginResult.data.user[0]);
                                $state.go('inicio');
                            },
                            function (error, status){
                                ErrorsHandlers.showAlert('Error al loguearse.');
                            }
                        );
                    }else{
                        ErrorsHandlers.showAlert('Usuario o contraseña incorrectas!');
                    }
                },
                function (error, status){
                    ErrorsHandlers.showAlert('No se pudo realizar la autenticación.');
                }
            );
        };
});
