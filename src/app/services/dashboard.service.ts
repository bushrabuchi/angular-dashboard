import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Widget, DashboardLayout } from '../models/widget.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private layoutSubject: BehaviorSubject<DashboardLayout>;
  public layout$: Observable<DashboardLayout>;

  private defaultWidgets: Widget[] = [
    {
      id: 'widget-1',
      title: 'Revenue Overview',
      type: 'chart',
      position: { x: 0, y: 0 },
      size: { width: 2, height: 1 },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [65, 59, 80, 81, 56, 55]
        }]
      }
    },
    {
      id: 'widget-2',
      title: 'Total Users',
      type: 'stats',
      position: { x: 2, y: 0 },
      size: { width: 1, height: 1 },
      data: {
        value: 1234,
        change: 12.5,
        icon: 'people'
      }
    },
    {
      id: 'widget-3',
      title: 'Sales',
      type: 'stats',
      position: { x: 3, y: 0 },
      size: { width: 1, height: 1 },
      data: {
        value: 5678,
        change: -3.2,
        icon: 'shopping_cart'
      }
    },
    {
      id: 'widget-4',
      title: 'Recent Orders',
      type: 'table',
      position: { x: 0, y: 1 },
      size: { width: 4, height: 1 },
      data: {
        columns: ['id', 'customer', 'product', 'amount', 'status'],
        rows: [
          { id: '001', customer: 'John Doe', product: 'Laptop', amount: '$1200', status: 'Completed' },
          { id: '002', customer: 'Jane Smith', product: 'Phone', amount: '$800', status: 'Pending' },
          { id: '003', customer: 'Bob Johnson', product: 'Tablet', amount: '$500', status: 'Completed' },
          { id: '004', customer: 'Alice Brown', product: 'Monitor', amount: '$300', status: 'Processing' }
        ]
      }
    },
    {
      id: 'widget-5',
      title: 'Revenue Budget',
      type: 'chart',
      position: { x: 0, y: 0 },
      size: { width: 2, height: 1 },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Budget',
          data: [30000, 59000, 80000, 81000, 56000, 55000]
        }]
      }
    }
  ];

  constructor() {
    const savedLayout = localStorage.getItem('dashboardLayout');
    const layout: DashboardLayout = savedLayout 
      ? JSON.parse(savedLayout) 
      : { widgets: this.defaultWidgets };
    
    this.layoutSubject = new BehaviorSubject<DashboardLayout>(layout);
    this.layout$ = this.layoutSubject.asObservable();
  }

  getLayout(): DashboardLayout {
    return this.layoutSubject.value;
  }

  updateLayout(layout: DashboardLayout) {
    this.layoutSubject.next(layout);
    localStorage.setItem('dashboardLayout', JSON.stringify(layout));
  }

  addWidget(widget: Widget) {
    const currentLayout = this.layoutSubject.value;
    currentLayout.widgets.push(widget);
    this.updateLayout(currentLayout);
  }

  removeWidget(widgetId: string) {
    const currentLayout = this.layoutSubject.value;
    currentLayout.widgets = currentLayout.widgets.filter(w => w.id !== widgetId);
    this.updateLayout(currentLayout);
  }

  resetLayout() {
    const layout: DashboardLayout = { widgets: this.defaultWidgets };
    this.updateLayout(layout);
  }

  // Mock data generators
  generateChartData() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Sales 2024',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.1)',
        tension: 0.4
      }]
    };
  }

  getAnalyticsData() {
    return {
      totalRevenue: 125000,
      totalOrders: 3456,
      totalUsers: 12345,
      conversionRate: 3.45,
      revenueGrowth: 15.8,
      ordersGrowth: 12.3,
      usersGrowth: 8.9,
      conversionGrowth: 2.1
    };
  }
}
