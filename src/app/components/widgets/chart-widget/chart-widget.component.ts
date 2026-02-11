import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit {
  @Input() data: any;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  ngOnInit() {
    if (this.data) {
      this.lineChartData = {
        labels: this.data.labels || [],
        datasets: this.data.datasets?.map((dataset: any) => ({
          data: dataset.data || [],
          label: dataset.label || 'Data',
          fill: true,
          tension: 0.4,
          borderColor: dataset.borderColor || '#3f51b5',
          backgroundColor: dataset.backgroundColor || 'rgba(63, 81, 181, 0.1)'
        })) || []
      };
    }
  }
}
