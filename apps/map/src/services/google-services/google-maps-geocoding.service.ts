import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EndpointDirectoryService } from '../endpoint-directory/endpoint-directory.service';
import { LatLngBoundsInterface, LatLngInterface } from '~models/map-view/lat-lng.interface';
import {
  GeocodingGeocoderRequestInterface,
  GeocodingGeocoderResponseInterface
} from '~models/google-services/geocoding-geocoder.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsGeocodingService {

  constructor(
    private http: HttpClient,
    private endpointDirectoryService: EndpointDirectoryService
  ) {
  }

  getGeocode(address: string): Observable<GeocodingGeocoderResponseInterface[]> {
    if (address) {
      return this.http.post<GeocodingGeocoderResponseInterface[]>(
        this.endpointDirectoryService.getGeocodingGeocoder().url,
        this.generateGeocodingGeocoderRequest(address),
        this.endpointDirectoryService.getGeocodingGeocoder().httpOptions
      );
    } else {
      return of<null[]>([null]);
    }
  }

  generateGeocodingGeocoderRequest(
    address: string,
    components?: { [key: string]: string },
    bounds?: LatLngBoundsInterface,
    region?: string,
    latLng?: LatLngInterface,
    resultType?: string[],
    locationType?: string,
    placeID?: string,
    language?: string,
    custom?: { [key: string]: string[] }
  ): GeocodingGeocoderRequestInterface {
    return {
      address,
      components,
      bounds,
      region,
      latLng,
      resultType,
      locationType,
      placeID,
      language,
      custom
    };
  }

}
