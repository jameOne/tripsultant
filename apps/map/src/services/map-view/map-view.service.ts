import { Injectable } from '@angular/core';
import { LatLng, latLng, LatLngExpression, TileLayerOptions } from 'leaflet';
import { GeocodingGeocoderResponseInterface } from '~models/google-services/geocoding-geocoder.interface';
import { environment } from '~environments/environment';
import { TileLayerEndpointsInterface } from '~environments/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {

  tileLayerURLEndpoints: TileLayerEndpointsInterface;

  constructor() {
    this.tileLayerURLEndpoints = environment.tileLayerEndpoints;
  }

  calculateCentroid(
    waypointGeocodes: GeocodingGeocoderResponseInterface[][]
  ): LatLng | null {
    let coordinates: LatLngExpression[] = [];
    try {
      waypointGeocodes.forEach(geocodeResults => coordinates.push([
        geocodeResults[0].geometry.location.lat,
        geocodeResults[0].geometry.location.lng
      ]));
      // console.log('preset', coordinates);
      // Remove dupes so centroid does not skew.
      const sawCoords = {};
      coordinates.forEach(coordinate => {
        if (!sawCoords[coordinate.toString()]) {
          sawCoords[coordinate.toString()] = true;
        }
      });
      coordinates = Object.keys(sawCoords).map(coordinate => [Number(coordinate.split(',')[0]), Number(coordinate.split(',')[1])]);
      const centroidLat: number = coordinates.map(coordinate => coordinate[0]).reduce((a, b) => a + b, 0) / coordinates.length;
      const centroidLong: number = coordinates.map(coordinate => coordinate[1]).reduce((a, b) => a + b, 0) / coordinates.length;
      return latLng(centroidLat, centroidLong);
    } catch (e) {
      return null;
    }
  }

}
