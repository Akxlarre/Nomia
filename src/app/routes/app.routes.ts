import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { adminAuthGuard } from '../admin/services/admin-auth.guard';
import { AdminLayoutComponent } from '../admin/components/admin-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../home/pages/home.page').then(m => m.HomePage),
      },
      {
        path: 'test',
        loadComponent: () => import('../test/pages/test.page').then(m => m.TestPage),
      },
      {
        path: 'result',
        loadComponent: () => import('../result/pages/result.page').then(m => m.ResultPageComponent),
      },
      {
        path: 'results-final',
        loadComponent: () => import('../result/pages/results-final.page').then(m => m.ResultsFinalPage),
      },
      {
        path: 'purchase',
        loadComponent: () => import('../pay/pages/purchase.page').then(m => m.PurchasePageComponent),
      },
      {
        path: 'payment/redirect',
        loadComponent: () => import('../pay/pages/payment-redirect.page').then(m => m.PaymentRedirectPage),
      },
      {
        path: 'payment/failure',
        loadComponent: () => import('../pay/pages/payment-failure.page').then(m => m.PaymentFailurePage),
      },
    ],
  },
  {
    path: 'admin/login',
    loadComponent: () => import('../admin/pages/login.page').then(m => m.AdminLoginPage),
  },
  {
    path: 'admin',
    canActivate: [adminAuthGuard],
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('../admin/pages/dashboard.page').then(m => m.DashboardPage),
      },
    ],
  },
];
