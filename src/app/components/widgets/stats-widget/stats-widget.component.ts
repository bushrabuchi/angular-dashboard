import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget',
  templateUrl: './stats-widget.component.html',
  styleUrls: ['./stats-widget.component.scss']
})
export class StatsWidgetComponent {
  @Input() data: any;

  get isPositiveChange(): boolean {
    return this.data?.change >= 0;
  }
}
