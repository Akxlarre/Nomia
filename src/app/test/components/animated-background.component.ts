import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-animated-background',
  template: `
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-20 animate-pulse-slow"
      aria-hidden="true"
    >
      <div class="absolute inset-0 bg-base-100"></div>
    </div>
  `,
})
export class AnimatedBackgroundComponent {}
