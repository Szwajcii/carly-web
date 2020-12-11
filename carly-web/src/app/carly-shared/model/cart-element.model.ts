import {PartType} from './part-type.enum';
import {SpecificPart} from './specific-part.model';

export class CartElement {
  factoryId: string;
  factoryName: string;
  totalAmountOfFactory: number;
  totalQuantityOfFactory: number;
  parts: Map<PartType, SpecificPart[]>;
}
