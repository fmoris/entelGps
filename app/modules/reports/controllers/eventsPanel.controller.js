'use strict';

angular.module('rsliteapp')
    .controller('EventsPanelCtrl', function (ApiReport, ErrorsHandlers, NgTableParams, $scope, $localStorage, $timeout, $window, $mdDialog) {
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
		      		return ApiReport.getEventsReports(prms).then(
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
	    	var params = 'sessionId=' + user.sessionId + '&reportId='+ report.id;
	    	var url = ApiReport.downloadReport(params, 'excel');
	    	console.log(url);
	    	$window.open(url);
	    };
	    $scope.sendReport = function (report){
		    $mdDialog.show({
		      	controller: 'SendEmailCtrl',
		      	templateUrl: 'modules/shared/views/modal.sendEmail.view.html',
		      	clickOutsideToClose:true,
		      	fullscreen : true,
		      	locals: {
		           report: report.id
		        },
		    }).then(
		    	function(answer) {
		      		$scope.status = 'You said the information was "' + answer + '".';
		    	}, function() {
		      		$scope.status = 'You cancelled the dialog.';
    			}
    		);
	    }
    });