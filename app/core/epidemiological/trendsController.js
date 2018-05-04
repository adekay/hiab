(function () {
    'use strict';

    angular.module('app.epidemiological.trends', [])

        .controller('TrendsController', TrendsController);

        TrendsController.$inject = ['$log'];

    function TrendsController($log) {
        var vm = this;

        vm.options = {
            chart: {
                type: 'lineChart',
                height: 250,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 30
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
                    axisLabel: 'Time (ms)',
                    ticks: '7',
                    showMaxMin: false,
                    tickFormat: function (d,i) {

                        var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

                        return weekday[i];
                    }
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function (d) {
                        return d;
                    },
                    axisLabelDistance: -10,
                    showMaxMin: false,
                    tickPadding: 10
                },
                callback: function (chart) {
                    console.log("!!! lineChart callback !!!");
                },
                showLegend: false
            },
            title: {
                enable: false,
                text: 'Title for Line Chart'
            },
            subtitle: {
                enable: false,
                text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: false,
                html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        vm.data = sinAndCos();

        vm.dat = [];

        vm.dat.push(vm.data[0]);

        /*Random Data Generator */
        function sinAndCos() {
            var sin = [],
                sin2 = [],
                cos = [],
                cos2 = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 7; i++) {
                sin.push({
                    x: i,
                    y: Math.random() * 1000
                });
                sin2.push({
                    x: i,
                    y: Math.random() * 1000
                });
                cos.push({
                    x: i,
                    y: Math.random() * 1000
                });
                cos2.push({
                    x: i,
                    y: Math.random() * 1000
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [{
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
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                },
                {
                    values: cos2,
                    key: 'Another Cosine wave',
                    color: '#cccccc',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };
    }
})();