'use strict';

angular.module('rsliteapp')
	//slim scroll directive
    .directive("slimScroll", function ($timeout) {

        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                $timeout(function (){
                    element.slimScroll({
                        height : window.innerHeight - element.offset().top - 10,
                        size : 5,
                        width : 'auto',
                        railVisible : true
                    });
                });
            }
        };
    })
    .directive("slimScrollSidemenu", function ($timeout) {

        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                $timeout(function (){
                    element.slimScroll({
                        height : window.innerHeight - element.parent().offset().top - 25,
                        size : 4,
                        position: 'left',
                        railVisible : true
                    });
                }, 500);
            }
        };
    });