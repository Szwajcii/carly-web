import {PartType} from './part-type.enum';

export class PartToCartRequest {
   consumerId: string;
   consumerName: string;
   supplierId: string;
   supplierName: string;
   partId: string;
   partName: string;
   partType: PartType;
   quantity: number;
   amount: number;
}
