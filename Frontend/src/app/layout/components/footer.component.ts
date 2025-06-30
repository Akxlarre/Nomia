import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <footer
      class="relative footer footer-center px-4 py-6 text-sm font-medium text-base-content/80
             bg-base-100 dark:bg-base-200/10 backdrop-blur-md"
    >
      <p>© 2025 Nomia. Un nombre con alma</p>

      <!-- Ondas decorativas suaves -->
      <div
        aria-hidden="true"
        class="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
      >
        <svg
          class="relative block w-[120%] max-w-none h-22 sm:h-30 md:h-38 text-secondary/20 dark:text-accent/30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,64L40,85.3C80,107,160,149,240,149.3C320,149,400,107,480,90.7C560,75,640,85,720,106.7C800,128,880,160,960,160C1040,160,1120,128,1200,122.7C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
