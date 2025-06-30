import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  standalone: true,
  selector: 'app-admin-login-page',
  imports: [FormsModule],
  template: `
    <div class="flex items-center justify-center min-h-screen p-4 bg-base-200">
      <form
        class="space-y-4 p-6 bg-base-100 shadow rounded-xl w-full max-w-sm"
        (ngSubmit)="login()"
      >
        <h1 class="text-xl font-semibold text-center">Admin Login</h1>
        <input
          class="input input-bordered w-full"
          [(ngModel)]="username"
          name="username"
          placeholder="Usuario"
          required
        />
        <input
          class="input input-bordered w-full"
          type="password"
          [(ngModel)]="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button class="btn btn-primary w-full" type="submit">Ingresar</button>
      </form>
    </div>
  `,
})
export class AdminLoginPage {
  username = '';
  password = '';

  constructor(private auth: AdminAuthService, private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.auth.login('demo-token');
      this.router.navigateByUrl('/admin');
    }
  }
}
