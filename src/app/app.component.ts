import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Customizable Dashboard';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Apply saved theme on startup
    this.themeService.applyTheme();
  }
}
