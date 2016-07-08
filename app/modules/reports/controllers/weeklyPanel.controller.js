'use strict';

angular.module('rsliteapp')
    .controller('WeeklyPanelCtrl', function (ApiReport, ErrorsHandlers, NgTableParams, $scope, $localStorage, $timeout) {
	    $scope.tableParams = new NgTableParams(
	    	{
	    		count : 25
	    	}, 
	    	{
	    		counts: [25, 50, 100],
	      		getData: function (params){
	      			var user = angular.fromJson($localStorage.user);
		      		var prms = {
		      			sessionId : user.sessionId,
		      			companyId : user.companyId,
		      			page : params.page(),
		      			limit : params.count(),
		      			start : (params.page() - 1) * 25
		      		};
		      		return ApiReport.getWeeklyReports(prms).then(
		      			function (result){
		      				if(result.status === 200 && result.statusText === 'OK'){
		      					params.total(result.data.total);
					    		return result.data.report;
		      				}else{
		      					ErrorsHandlers.showAlert('No se pudieron obtener los reportes.');
		      				}
			    		},
			    		function (error){
			    			if(error.status === 500){
			    				ErrorsHandlers.showAlert('Su sesión a expirado').then(function (result){
			    					ErrorsHandlers.sessionExpired();
			    				});
			    			}else{
			    				ErrorsHandlers.showAlert('Error al obtener los reportes. Contáctese con el administrador');
			    			}
			    		}
			    	);
	      		}
	    	}
	    );
	    $scope.downloadReport = function (report){
	    	var user = angular.fromJson($localStorage.user);
      		var prms = {
      			sessionId : user.sessionId,
      			companyId : user.companyId,
      			reportId : report.id
      		};
	    	ApiReport.downloadReportExcel(prms).then(
	    		function (result){
	    			console.log(result);
	    		},
	    		function (error){
	    			ErrorsHandlers.showAlert(error.data);
	    		}
	    	);
	    };
	    $scope.sendReport = function (){

	    };
    });