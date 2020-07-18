import { Injectable } from '@angular/core';
import {
  AvoidEnum, TrafficModelEnum,
  TransitModeEnum, TransitRoutingPreferenceEnum,
  TravelModeEnum,
  UnitsEnum
} from '~models/google-services/distance-matrix.interface';
import {
  DirectionsRequestInterface,
  DirectionsResponseInterface
} from '~models/google-services/directions.interface';
import { Observable, of } from 'rxjs';
import { EndpointDirectoryService } from '../endpoint-directory/endpoint-directory.service';
import { HttpClient } from '@angular/common/http';
import { DirectionsModeEnum } from '~models/directions/directions.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsDirectionsService {

  constructor(
    private http: HttpClient,
    private endpointDirectoryService: EndpointDirectoryService
  ) {
  }

  getDirections(origin: string, destination: string, waypoints?: string[],
                directionsModeSelection?: DirectionsModeEnum): Observable<DirectionsResponseInterface> {
    if (origin && destination) {
      return this.http.post<DirectionsResponseInterface>(
        this.endpointDirectoryService.getDirections().url,
        this.generateDirectionsRequest(
          origin,
          destination,
          waypoints,
          directionsModeSelection,
          true,
          'en'
        ),
        this.endpointDirectoryService.getDirections().httpOptions
      );
    } else {
      return of<null>(null);
    }
  }

  generateDirectionsRequest(
    origin: string,
    destination: string,
    waypoints?: string[],
    directionsModeSelection?: DirectionsModeEnum,
    alternatives?: boolean,
    language?: string,
    departureTime?: string,
    arrivalTime?: string,
    optimize?: boolean,
    avoid?: AvoidEnum,
    units?: UnitsEnum,
    region?: string,
    transitMode?: TransitModeEnum,
    transitRoutingPreference?: TransitRoutingPreferenceEnum,
    trafficModel?: TrafficModelEnum
  ): DirectionsRequestInterface {
    let mode: TravelModeEnum;
    if (directionsModeSelection === DirectionsModeEnum.FLYING) {
      // pass off to custom service.
      // Although this should not happen since the flying button
      // will be disabled until the service is operational.
    } else if (directionsModeSelection === DirectionsModeEnum.WALKING) {
      mode = TravelModeEnum.WALKING;
    } else if (directionsModeSelection === DirectionsModeEnum.TRANSIT) {
      mode = TravelModeEnum.TRANSIT;
    } else if (directionsModeSelection === DirectionsModeEnum.DRIVING) {
      mode = TravelModeEnum.DRIVING;
    }
    return {
      origin,
      destination,
      mode,
      departureTime,
      arrivalTime,
      waypoints,
      alternatives,
      optimize,
      avoid,
      language,
      units,
      region,
      transitMode,
      transitRoutingPreference,
      trafficModel
    };
  }

}
