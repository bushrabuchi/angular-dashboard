import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sidebarOpened = true;
  settingsForm!: FormGroup;
  isDarkMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkMode();
    
    this.settingsForm = this.formBuilder.group({
      darkMode: [this.isDarkMode],
      notifications: [true],
      autoSave: [true],
      language: ['en'],
      timezone: ['UTC']
    });

    this.settingsForm.get('darkMode')?.valueChanges.subscribe(value => {
      if (value !== this.isDarkMode) {
        this.themeService.toggleTheme();
        this.isDarkMode = value;
      }
    });
  }

  onToggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  saveSettings() {
    this.snackBar.open('Settings saved successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  resetSettings() {
    this.settingsForm.reset({
      darkMode: false,
      notifications: true,
      autoSave: true,
      language: 'en',
      timezone: 'UTC'
    });
    this.snackBar.open('Settings reset to defaults', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
}
