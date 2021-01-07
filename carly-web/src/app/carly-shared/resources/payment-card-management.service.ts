import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaymentCard} from '../model/payment-card.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentCardManagementService {

  paymentCardManagementApi = 'api/payment-card';

  constructor(private http: HttpClient) {
  }

  findAllUserPaymentCards(userId: string): Observable<PaymentCard.Model[]> {
    return this.http.get<PaymentCard.Model[]>(`${this.paymentCardManagementApi}/all-payment-cards/${userId}`);
  }

  findPaymentCardById(id: string): Observable<PaymentCard.Model> {
    return this.http.get<PaymentCard.Model>(`${this.paymentCardManagementApi}/${id}`);
  }

  activateCard(paymentCardId: string): Observable<PaymentCard.Model> {
    return this.http.post<PaymentCard.Model>(`${this.paymentCardManagementApi}/activate-card/${paymentCardId}`, {});
  }

  create(paymentCard: PaymentCard.POST): Observable<PaymentCard.Model> {
    return this.http.post<PaymentCard.Model>(`${this.paymentCardManagementApi}`, paymentCard);
  }

  update(paymentCard: PaymentCard.PUT): Observable<PaymentCard.Model> {
    return this.http.put<PaymentCard.Model>(`${this.paymentCardManagementApi}`, paymentCard);
  }

  verifyPaymentCard(verifyModel: PaymentCard.VerifyModel) {
    return this.http.post<boolean>(`${this.paymentCardManagementApi}/verify-payment-card`, verifyModel);
  }

}
