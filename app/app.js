'use strict';

var HOST = '172.16.120.14';

angular
    .module('rsliteapp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'config',
        'openlayers-directive',
        'ngStorage',
        'ngMaterial',
        'ngTable',
        'pascalprecht.translate',
        'nvd3'
    ])
    //variables constantes para el proyecto
    .constant("hostConfig", {
        host: 'http://172.16.120.14',
        port : 80
    })
    .config( function ($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.useStaticFilesLoader({
            type: 'static-files',
            prefix: 'lenguages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('es');

        $urlRouterProvider.otherwise('/inicio');

    })
    //cada vez que el usuario cambia de estado, pasa por aca para comprobar estado de login
   /* .run(function ($rootScope, $location, $state, $localStorage) {
        $rootScope.$on( '$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            //verifica si el usuario esta logueado
            if($localStorage.user === undefined){
                //si el estado a ir es distinto del login, redirecciona al login
                if(toState.name !== 'login'){
                    e.preventDefault();
                    $state.go('login');
                }
            }else{
                //si al estar logueado va al login, redirecciona al map
                if(toState.name === 'login'){
                    e.preventDefault();
                    $state.go('inicio');
                }
            }
        });
    });*/

