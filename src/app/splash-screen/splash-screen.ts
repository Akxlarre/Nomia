import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css'],
  imports: [],
})
export class SplashScreenComponent {
  logoSrc = '/assets/img/Logo-ligth.webp';
  dataTheme = 'nomialight';

  constructor() {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'nomiadark';
    if (isDark) {
      this.logoSrc = '/assets/img/logo-dark.webp';
      this.dataTheme = 'nomiadark';
    }
  }
}
