'use strict';

angular.module('rsliteapp')
	.config(function ($stateProvider) {
	    $stateProvider
	        .state('login', {
	            url: '/login',
	            templateUrl: 'modules/login/views/login.view.html'
	    });
	});