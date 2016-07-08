'use strict';

angular.module('rsliteapp')
    .factory('ApiReport', function(ENV, $localStorage, $http){
        var user = angular.fromJson($localStorage.user);
    	return {
    		getWeeklyReports : function (params){
    			return $http({
                    url : ENV.endpoint + '/reports/reportsweekly',
                    method : 'GET',
                    params : params
                });
    		},
    		downloadReport : function (params, option){
                if(option === 'excel'){
                    return ENV.endpoint + '/reports/download/excel?' + params;
                }else{
                    return ENV.endpoint + '/reports/download/csv?' + params;
                }
    		},
            getEventsReports : function (params){
                return $http({
                    url : ENV.endpoint + '/reports/events',
                    method : 'GET',
                    params : params
                });
            },
            sendEmailReport : function (params){
                params.sessionId = user.sessionId;
                params.companyId = user.companyId;
                console.log(JSON.stringify(params));
                return $http({
                    url : ENV.endpoint + '/reports/send/excel',
                    method : 'GET',
                    params : params
                });
            },
    	};
    });