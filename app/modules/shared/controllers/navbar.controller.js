'use strict';

angular.module('rsliteapp')
    .controller('NavbarCtrl', function ($translate, $state, $localStorage) {
        /*this.user = JSON.parse($localStorage.user).userName;
        this.menu = [
            {
                'title' : 'map.title',//$translate.instant('map.title')
                'state' : 'map'
            },
            {
                'title' : 'administration.title',
                'state' : 'administration.fleetsPanel'
            },
            {
                'title' : 'reports.title',
                'state' : 'reports.weeklyPanel'
            }
        ];
        this.isActive = function(state){
            if(state !== undefined){
                return state.split('.')[0] === $state.current.name.split('.')[0];
            }
        };*/
        this.logout = function (){
            delete $localStorage.user;
            $state.go('login');
        };
    });
