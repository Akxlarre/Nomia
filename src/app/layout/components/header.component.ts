import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../theme/services/theme.service';
@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, ],
  template: `
    <header class="navbar bg-base-200 text-base-content shadow-sm">
      <div class="flex-1">
        <a routerLink="/" class="text-xl font-serif tracking-wide">Nomia 🌿</a>
      </div>
      <div class="flex-none gap-2">
        <button class="btn btn-ghost transition-all hover:scale-105 focus-visible:ring" (click)="toggleTheme()">
            @if (isDark) {
            <span class="material-icons">dark_mode</span>
            } @else {
            <span class="material-icons">light_mode</span>
            }
        </button>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isDark = false;

  constructor(private themeService: ThemeService) {
    const stored = localStorage.getItem('theme');
    this.isDark = stored === 'nomiadark';
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const nextTheme = this.isDark ? 'nomiadark' : 'nomialight';
    this.themeService.switchTheme(nextTheme);
  }
}
