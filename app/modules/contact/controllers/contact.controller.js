'use strict';

angular.module('rsliteapp')
    .controller('ContactCtrl', function ($state, $localStorage, $scope, ApiLogin, $rootScope, ErrorsHandlers) {
    $scope.$state = $state.current.name;
    if($scope.$state == 'contact' || $scope.$state == 'characteristics' || $scope.$state == 'comercialInfo'){
    	$rootScope.menuLateral = false;
    }else{
    	$rootScope.menuLateral = true;
    }
});
