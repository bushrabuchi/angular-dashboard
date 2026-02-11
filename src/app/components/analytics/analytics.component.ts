import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  sidebarOpened = true;
  analyticsData: any;

  public revenueChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public revenueChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Sales',
      data: [65000, 59000, 80000, 81000],
      backgroundColor: 'rgba(63, 81, 181, 0.7)'
    }]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.analyticsData = this.dashboardService.getAnalyticsData();
    const chartData = this.dashboardService.generateChartData();
    this.revenueChartData = {
      labels: chartData.labels,
      datasets: chartData.datasets
    };
  }

  onToggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
