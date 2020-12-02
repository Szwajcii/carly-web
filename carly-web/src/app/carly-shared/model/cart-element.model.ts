import {PartType} from './part-type.enum';

export class CartElement {
  companyName: string;
  parts: Map<PartType, any>;
}
