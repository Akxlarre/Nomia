import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <footer class="footer footer-center p-4 bg-base-100/80 backdrop-blur-sm shadow-sm text-base-content text-sm">
      <p>© 2025 Nomia. Un nombre con alma</p>
    </footer>
  `,
})
export class FooterComponent {}