import { Injectable } from '@angular/core';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import { PlacesQueryAutocompleteResponseInterface } from '~models/google-services/places-query-autocomplete.interface';
import { GeocodingGeocoderResponseInterface } from '~models/google-services/geocoding-geocoder.interface';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() {
  }

  createIndex(index: number): { index: number } {
    return { index };
  }

  newTripWaypointForm(
    parentIndex: number,
    name: string,
    waypoint: PlacesQueryAutocompleteResponseInterface,
    waypointGeocode?: GeocodingGeocoderResponseInterface[]
  ): { index: number, waypointForm: WaypointInterface } {
    return {
      index: parentIndex,
      waypointForm: {
        parentIndex,
        name,
        waypoint,
        waypointGeocode
      }
    };
  }

  newTripWaypoint(
    parentIndex: number,
    name: string,
    waypoint: PlacesQueryAutocompleteResponseInterface,
    waypointGeocode: GeocodingGeocoderResponseInterface[]
  ): { index: number, waypointForm: WaypointInterface } {
    return {
      index: parentIndex,
      waypointForm: {
        name,
        waypoint,
        waypointGeocode
      }
    };
  }

  newTrip(
    name?: string,
    startDate?: Date,
    endDate?: Date
  ): { trip: TripInterface } {
    return {
      trip: {
        name,
        startDate,
        endDate
      }
    };
  }
}
