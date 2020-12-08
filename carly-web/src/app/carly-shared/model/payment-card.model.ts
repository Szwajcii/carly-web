export namespace PaymentCard {

  export interface Model {
    id: string;
    paymentCardProvider: string;
    paymentCardNumber: string;
    paymentCardHolder: string;
    expiryDate: Date | string;
    cvvCode: string;
    cardActive: boolean;
  }

  export type POST = Model;

  export type PUT = Model;

}
