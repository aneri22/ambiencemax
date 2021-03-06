import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { UserDataService } from '../Services/UserDataService';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bar-chart-component',
  templateUrl: './bar-chart-component.component.html',
  styleUrls: ['./bar-chart-component.component.css']
})
export class BarChartComponentComponent implements OnInit {
  public Pending;
  public Closed;
  public Open;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  barChartLabels: Label[] = [ 'Pending' , 'Open', 'Closed'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];
  constructor(public userDataService: UserDataService) {
    console.log('Bar Graph Const');
  }
  ngOnInit() {
  this.userDataService.fetchReqStat().subscribe((e) => {
    this.Pending = e.Pending;
    this.Closed = e.Closed;
    this.Open = e.Open;
    console.log(this.Pending);
  });
  this.Pending = this.userDataService.reqStats.Pending;
  // this.All = this.UsrDataService.reqStats.All;
  this.Open = this.userDataService.reqStats.Open;
  this.Closed = this.userDataService.reqStats.Closed;
  this.barChartData = [
    {
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
      borderWidth: 1,
      barPercentage: 0.5,
      barThickness: 70,
      maxBarThickness: 80,
      minBarLength: 5,
      data: [this.Pending, this.Open, this.Closed],
      label: 'No Of Requests'
    }
  ];
  console.log('bar Called!');
  }
}
