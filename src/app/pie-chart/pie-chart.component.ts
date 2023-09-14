import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}
  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      credits:{
        enabled:false
      },
      title: {
          text: 'Average Student Admission 2023',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Courses',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 14.77
          },  {
              name: 'Testing',
              y: 4.86
          }, {
              name: '.NET',
              y: 2.63
          }, {
              name: 'BIG DATA',
              y: 1.53
          },  {
              name: 'Fluter',
              y: 1.40
          }, {
              name: 'Java Spring',
              y: 0.84
          }, {
              name: 'JAVA',
              y: 2.6
          }]
      }]
  }
  }
}
