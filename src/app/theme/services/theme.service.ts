import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private defaultTheme: 'nomialight' | 'nomiadark' = 'nomialight';

  loadSavedTheme() {
    const stored = localStorage.getItem('theme') as 'nomialight' | 'nomiadark' | null;
    const theme = stored ?? this.defaultTheme;
    this.applyTheme(theme);
  }

  switchTheme(theme: 'nomialight' | 'nomiadark') {
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: 'nomialight' | 'nomiadark') {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'nomiadark');
  }
}
