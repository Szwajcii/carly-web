import {PreModel} from './premodel.model';
import {Page} from './paginated.model';
import {CarBody} from './car-body.model';
import {Transmission} from './transmission.enum';
import {Engine} from './engine.model';
import {Breaks} from './breaks.model';
import {Wheels} from './wheels.model';
import {Tires} from './tires.model';
import {Windows} from './windows.model';
import {Equipment} from './equipment.model';
import {Painting} from './painting.model';
import {CarModel} from './car-model.model';

export namespace Car {

  export interface Model extends PreModel {
    model: CarModel.Model;
    maxSpeed: number;
    accelerate: number;
    yearOfProduction: number;
    engine: Engine.Model;
    transmission: Transmission;
    carBody: CarBody;
    wheels: Wheels.Model;
    breaks: Breaks.Model;
    tires: Tires.Model;
    windows: Windows.Model;
    weight: number;
    numberOfDoors: number;
    bodyPainting: Painting.Model;
    leasingAvailable: boolean;
    equipment: Array<Equipment.Model>;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum CarType {

  }

}
