(function () {
    'use strict';

    angular.module('app.epidemiological.trends', [])

        .controller('TrendsController', TrendsController);

        TrendsController.$inject = ['$log'];

    function TrendsController($log) {
        var vm = this;

        vm.statusOptions = {
            chart: {
                type: 'lineChart',
                height: 250,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 45
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
                    axisLabel: '',
                    ticks: '7',
                    showMaxMin: false,
                    tickFormat: function (d,i) {

                        var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

                        return weekday[i];
                    }
                },
                yAxis: {
                    axisLabel: '',
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

        vm.diseasesOptions = {
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

        vm.genderOptions = {
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

        vm.ageOptions = {
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

        vm.statusData = statusData();

        vm.diseasesData = diseasesData();

        vm.genderData = genderData();

        vm.ageData = ageData();

        /*Random Data Generator */
        function statusData() {
            var sin = [],
                sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 7; i++) {
                sin.push({
                    x: i,
                    y: Math.floor(Math.random() * 50000)
                });
                sin2.push({
                    x: i,
                    y: Math.floor(Math.random() * 50000)
                });
                cos.push({
                    x: i,
                    y: Math.floor(Math.random() * 10000)
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [{
                    values: sin, //values - represents the array of {x,y} data points
                    key: 'Critical', //key  - the name of the series.
                    color: '#DA80D1' //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Moderate',
                    color: '#67B0C3'
                },
                {
                    values: sin2,
                    key: 'Minor',
                    color: '#FFD876',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

        function diseasesData() {
            var sin = [],
                sin2 = [],
                cos = [],
                cos2 = [],
                cos3 = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 7; i++) {
                sin.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                sin2.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos2.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos3.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [{
                    values: sin, //values - represents the array of {x,y} data points
                    key: 'Malaria', //key  - the name of the series.
                    color: '#DA80D1' //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Lassa Fever',
                    color: '#67B0C3'
                },
                {
                    values: sin2,
                    key: 'Cholera',
                    color: '#FFD876',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                },
                {
                    values: cos2,
                    key: 'Thyphoid',
                    color: '#B8FF2F',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                },
                {
                    values: cos3,
                    key: 'Diabeties',
                    color: '#73CBA7',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

        function genderData() {
            var sin = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 7; i++) {
                sin.push({
                    x: i,
                    y: Math.floor(Math.random() * 100)
                });
                cos.push({
                    x: i,
                    y: Math.floor(Math.random() * 100)
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [{
                    values: sin, //values - represents the array of {x,y} data points
                    key: 'Female', //key  - the name of the series.
                    color: '#DA80D1' //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Male',
                    color: '#67B0C3'
                }
            ];
        };

        function ageData() {
            var sin = [],
                sin2 = [],
                cos = [],
                cos2 = [],
                cos3 = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 7; i++) {
                sin.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                sin2.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos2.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
                cos3.push({
                    x: i,
                    y: Math.floor(Math.random() * 1000)
                });
            }

            //Line chart data should be sent as an array of series objects.
            return [{
                    values: sin, //values - represents the array of {x,y} data points
                    key: '0-10', //key  - the name of the series.
                    color: '#DA80D1' //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: '10-25',
                    color: '#67B0C3'
                },
                {
                    values: sin2,
                    key: '25-50',
                    color: '#FFD876',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                },
                {
                    values: cos2,
                    key: '50-50',
                    color: '#B8FF2F',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                },
                {
                    values: cos3,
                    key: '70 and Above',
                    color: '#73CBA7',
                    //area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

    }
})();