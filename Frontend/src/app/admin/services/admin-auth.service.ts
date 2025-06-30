import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private tokenKey = 'admin_token';
  token = signal<string | null>(localStorage.getItem(this.tokenKey));

  constructor(private router: Router) {}

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.token.set(token);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.token.set(null);
    this.router.navigateByUrl('/admin/login');
  }

  isLoggedIn(): boolean {
    return !!this.token();
  }
}
