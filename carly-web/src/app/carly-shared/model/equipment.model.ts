import {PreModel} from './premodel.model';
import {Page} from './paginated.model';

export namespace Equipment {

  export interface Model extends PreModel {
    type: EquipmentType;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum EquipmentType {
    Radio = 'Radio',
    GPS = 'GPS',
    DVD = 'DVD',
    MP3 = 'MP3'
  }
}
