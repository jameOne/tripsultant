import { DirectionsInterface, DirectionsModeEnum } from '~models/directions/directions.interface';
import {
  DirectionsResponseInterface
} from '~models/google-services/directions.interface';

export interface DirectionsStateInterface {

  directions: DirectionsInterface[][];
  directionsResponses: DirectionsResponseInterface[][];

  currentDistancesInMeters: number[];
  currentDurationsInSeconds: number[];
  selectedRouteIndex: number[];

  directionsModeSelection: DirectionsModeEnum;
}

export const initialDirectionsState: DirectionsStateInterface = {
  directions: [],
  directionsResponses: [],

  currentDistancesInMeters: [],
  currentDurationsInSeconds: [],
  selectedRouteIndex: [],

  directionsModeSelection: 0
};
