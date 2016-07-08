'use strict';

angular.module('rsliteapp')
    .controller('SendEmailCtrl', function (ApiReport, ErrorsHandlers, $scope, $mdDialog, $timeout, report) {
        $scope.emails = [];
        $scope.badEmail = false;

        $scope.cancel = function(){
        	$mdDialog.cancel();
        };

        $scope.verifyEmail = function (email, index){
        	if(!validateEmail(email)){
        		$scope.emails.splice((index - 1), 1);
        		$scope.badEmail = true;
        		$timeout(function (){
        			$scope.badEmail = false;
        		}, 3000);
        	}
        };

        $scope.sendEmail = function (emails){
        	var params = {
        		listMail : emails.join(),
        		reportId : report
        	}
        	ApiReport.sendEmailReport(params).then(
        		function (result){
        			$mdDialog.hide();
        		},
        		function (error){
        			ErrorsHandlers.showAlert('Error al enviar los emails. Contáctese con el administrador');
        		}
        	);
        };

        function validateEmail(email) {
		    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		}
    });