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
];
