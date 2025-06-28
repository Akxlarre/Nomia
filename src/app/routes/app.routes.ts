import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

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
        path: 'pay',
        loadComponent: () => import('../pay/pages/payment-redirect.page').then(m => m.PaymentRedirectPage),
      },
    ],
  },
];