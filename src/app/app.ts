import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen';
import { ThemeService } from './theme/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashScreenComponent],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  showSplash = true;

  constructor(private theme: ThemeService) {
    this.theme.loadSavedTheme();
  }

  ngOnInit() {
    setTimeout(() => this.hideSplash(), 2000);
  }

  hideSplash() {
    const splash = document.querySelector('app-splash-screen');
    if (splash) {
      splash.classList.add('fade-out');
      setTimeout(() => (this.showSplash = false), 700);
    } else {
      this.showSplash = false;
    }
  }
}
