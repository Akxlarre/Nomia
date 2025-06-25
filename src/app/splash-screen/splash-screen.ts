import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css'],
  imports: [],
})
export class SplashScreenComponent implements AfterViewInit {
  @ViewChild('spinner', { static: true }) spinner!: ElementRef<HTMLDivElement>;

  logoSrc = '/assets/img/Logo-ligth.webp';
  dataTheme = 'nomialight';
  private spinnerPath = '/assets/img/spinnerClaro.json';

  constructor() {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'nomiadark';

    if (isDark) {
      this.logoSrc = '/assets/img/logo-dark.webp';
      this.dataTheme = 'nomiadark';
      this.spinnerPath = '/assets/img/spinner.json';
    }
  }

  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: this.spinner.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.spinnerPath,
    });
  }
}
