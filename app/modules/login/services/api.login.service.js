'use strict';

angular.module('rsliteapp')
    .factory('ApiLogin', function(ENV, $http, ErrorsHandlers){
        return {
            getToken : function (params){
                return $http({
                    url : ENV.endpoint + '/users?username=' + window.btoa(params.user) + '&password=' + window.btoa(params.pass),
                    method : 'GET'
                });
            },
            login : function (token){
                return $http({
                    url : ENV.endpoint + '/users/login/' + token,
                    method : 'GET'
                });
            }
        };
    });