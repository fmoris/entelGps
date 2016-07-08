'use strict';

angular.module('rsliteapp')
    .controller('DashboardPanelCtrl', function ($scope) {
        $scope.options = {
            chart: {
                type: 'lineChart',
                height: 220,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function (e) {
                        console.log("stateChange");
                    },
                    changeState: function (e) {
                        console.log("changeState");
                    },
                    tooltipShow: function (e) {
                        console.log("tooltipShow");
                    },
                    tooltipHide: function (e) {
                        console.log("tooltipHide");
                    }
                },
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function (chart) {
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Lorem ipsum'
            },
            subtitle: {
                enable: true,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus feugiat justo, ac tincidunt purus scelerisque nec. Mauris ut commodo turpis. Aliquam leo sapien, ultrices in ligula nec, pharetra convallis enim. Praesent vestibulum elit quis .',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: true,
                html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        $scope.config = {
            visible: true, // default: true
            extended: false, // default: false
            disabled: false, // default: false
            refreshDataOnly: true, // default: true
            deepWatchOptions: true, // default: true
            deepWatchData: true, // default: true
            deepWatchDataDepth: 2, // default: 2
            debounce: 10 // default: 10
        };

        $scope.data = sinAndCos();

        /*Random Data Generator */
        function sinAndCos() {
            var sin = [],
                sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({
                    x: i,
                    y: Math.sin(i / 10)
                });
                sin2.push({
                    x: i,
                    y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5
                });
                cos.push({
                    x: i,
                    y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin, //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e' //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

        $scope.options2 = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2; },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2; }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        $scope.data2 = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];
    });
