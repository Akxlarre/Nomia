import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../theme/services/theme.service';
@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, ],
  template: `
    <header
      class="
        sticky top-0 z-50
        bg-base-100/80 backdrop-blur-sm shadow-sm
        grid grid-cols-[1fr_auto_1fr]
        items-center
        px-4 h-16
      "
    >
      <!-- Columna izquierda (vacía) -->
      <div></div>

      <!-- Logo en el centro -->
      <a
        routerLink="/"
        class="justify-self-center"
      >
        <img
          src="assets/img/LogoParaHeader.webp"
          alt="Logo Nomia"
          class="h-14 md:h-14 lg:h-14 w-auto"
        />
      </a>

      <!-- Toggle tema a la derecha -->
      <div class="flex justify-end">
        <button
          class="btn btn-ghost transition-all hover:scale-105 focus-visible:ring"
          (click)="toggleTheme()"
        >
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
