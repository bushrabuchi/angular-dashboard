import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Widget } from '../../models/widget.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebarOpened = true;
  widgets: Widget[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.layout$.subscribe(layout => {
      this.widgets = layout.widgets;
    });
  }

  onToggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  drop(event: CdkDragDrop<Widget[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.dashboardService.updateLayout({ widgets: this.widgets });
  }

  removeWidget(widgetId: string) {
    this.dashboardService.removeWidget(widgetId);
  }

  resetLayout() {
    this.dashboardService.resetLayout();
  }
}
