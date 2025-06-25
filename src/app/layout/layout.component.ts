import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  template: `
    <div class="min-h-screen flex flex-col bg-base-100 text-base-content transition-all duration-300 animate-ethereal-entry">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class LayoutComponent {}
