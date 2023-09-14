import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
    Highcharts = Highcharts
    chartOptions = {}
    // we are not using ngoninit since there is no dependency  injected
    constructor() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Yearly Placement Evaluation-Luminar Technolab',
                align: 'center'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
                accessibility: {

                }
            },
            yAxis: {
                title: {
                    useHTML: true,
                    text: 'Number  of Placements'
                }
            },
            tooltip: {
                shared: true,
                headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
            },
            //   to remove credits from the graph
            credits: {
                enabled: false
            },
            // contents in chrts are specified inside plotoptions
            plotOptions: {
                // series: {
                //     pointStart: 1
                // },
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'MEARN',
                data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214, 10398, 12811, 15483]
            }, {
                name: 'Python',
                data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039, 10398, 12811, 15483]

            }, {
                name: 'Software Testing',
                data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913, 4820, 4877, 4925]
            }, {
                name: 'Flutter',
                data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550, 3541, 3898, 4115]

            }, {
                name: 'Big Data',
                data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186, 2189, 2150, 2217]
            }]
        }
        // chart exporting step
        HC_exporting(Highcharts);
    }
}
