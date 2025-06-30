import { Injectable } from '@angular/core';
import { PaymentService } from '../../core/services/payment.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentFlowService {
  constructor(private payments: PaymentService) {}

  checkout(amount: number): Observable<any> {
    return this.payments.startPayment({ amount });
  }
}
