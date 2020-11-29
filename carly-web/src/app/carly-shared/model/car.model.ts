import {PreModel} from './premodel.model';
import {Page} from './paginated.model';
import {Transmission} from './transmission.enum';
import {Engine} from './engine.model';
import {Brake} from './brakes.model';
import {Wheels} from './wheels.model';
import {Tires} from './tires.model';
import {Windows} from './windows.model';
import {Equipment} from './equipment.model';
import {Painting} from './painting.model';
import {CarModel} from './car-model.model';

export namespace Car {

  export interface Model extends PreModel {
    model: CarModel.Model;
    engine: Engine.Model;
    wheels: Wheels.Model;
    brakes: Brake.Model;
    tires: Tires.Model;
    windows: Windows.Model;
    bodyPainting: Painting.Model;
    equipment: Array<Equipment.Model>;
    maxSpeed: number;
    accelerate: number;
    yearOfProduction: number;
    transmission: Transmission;
    weight: number;
    numberOfDoors: number;
    leasingAvailable: boolean;
  }

  export type PaginatedModel = Page<Model>;

  export type POST = Model;

  export type PUT = Model;

  export enum CarType {

  }

}
