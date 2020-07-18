import { Injectable } from '@angular/core';
import { MatrixElementInterface } from '~models/directions/directions.interface';
import {
  SetCurrentDistanceInMetersPropInterface,
  SetCurrentDurationInSecondsPropInterface,
  SetSelectedDistanceMatrixElementsPropInterface,
  UpdateDirectionsGroupPropInterface, UpdateRouteResponseGroupPropInterface, UpdateSelectedRoutePropInterface
} from '~store/actions/directions/directions.actions';
import { DistanceMatrixElementInterface } from '~models/google-services/distance-matrix.interface';
import { DirectionsResponseInterface } from '~models/google-services/directions.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor() {
  }

  getMatrixEntries(origins: string[], destinations: string[], route: string[]): MatrixElementInterface[] {
    const matrixElements: { row: number, column: number }[] = [];
    for (let i = 0; i < route.length - 1; i++) {
      const row = origins.indexOf(route[i]);
      const column = destinations.indexOf(route[i + 1]);
      matrixElements.push({ row, column });
    }
    return matrixElements;
  }

  generateUpdateSelectedRoutePropInterface(
    tripIndex: number,
    routeIndex: number
  ): UpdateSelectedRoutePropInterface {
    return {
      tripIndex,
      routeIndex
    };
  }

  generateUpdateRouteResponseGroupPropInterface(
    index: number,
    directionsResponse: DirectionsResponseInterface
  ): UpdateRouteResponseGroupPropInterface {
    return {
      index,
      directionsResponse
    };
  }

  generateUpdateDirectionsGroupPropInterface(
    index: number,
    matrixElements: MatrixElementInterface[]
  ): UpdateDirectionsGroupPropInterface {
    return {
      index,
      directions: { matrixElements }
    };
  }

  generateSetCurrentDistanceInMeters(index: number, distanceInMeters: number): SetCurrentDistanceInMetersPropInterface {
    return {
      index,
      distanceInMeters
    };
  }

  generateSetCurrentDurationInSeconds(index: number, durationInSeconds): SetCurrentDurationInSecondsPropInterface {
    return {
      index,
      durationInSeconds
    };
  }

  generateSetSelectedDistanceMatrixElementsPropInterface(
    index: number,
    distanceMatrixElements: DistanceMatrixElementInterface[]
  ): SetSelectedDistanceMatrixElementsPropInterface {
    return {
      index,
      distanceMatrixElements
    };
  }

}
