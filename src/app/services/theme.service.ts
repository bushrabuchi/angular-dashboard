import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject: BehaviorSubject<boolean>;
  public darkMode$: Observable<boolean>;

  constructor() {
    const savedTheme = localStorage.getItem('darkMode');
    const isDark = savedTheme ? JSON.parse(savedTheme) : false;
    this.darkModeSubject = new BehaviorSubject<boolean>(isDark);
    this.darkMode$ = this.darkModeSubject.asObservable();
  }

  toggleTheme() {
    const newTheme = !this.darkModeSubject.value;
    this.darkModeSubject.next(newTheme);
    localStorage.setItem('darkMode', JSON.stringify(newTheme));
    this.applyTheme();
  }

  applyTheme() {
    if (this.darkModeSubject.value) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
