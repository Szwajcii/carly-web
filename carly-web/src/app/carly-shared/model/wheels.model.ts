import {Brand} from './brand.model';
import {Page} from './paginated.model';
import {PreModel} from './premodel.model';

export namespace Wheels {

  export interface Model extends PreModel {
    diameter: DiameterType;
    weight: number;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum DiameterType {
    R16 = 'R16',
    R17 = 'R17',
    R18 = 'R18',
    R19 = 'R19',
    R20 = 'R20'
  }

}
