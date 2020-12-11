import {PartType} from './part-type.enum';

export class CartPartUpdate {
  consumerId: string;
  supplierId: string;
  partId: string;
  partType: PartType;
}
