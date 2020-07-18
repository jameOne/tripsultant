import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  PlacesQueryAutocompleteRequestInterface,
  PlacesQueryAutocompleteResponseInterface
} from '~models/google-services/places-query-autocomplete.interface';
import { map } from 'rxjs/operators';
import { EndpointDirectoryService } from '../endpoint-directory/endpoint-directory.service';
import { HttpClient } from '@angular/common/http';
import { LatLngInterface } from '~models/map-view/lat-lng.interface';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesPredictionsService {

  constructor(
    private http: HttpClient,
    private endpointDirectoryService: EndpointDirectoryService
  ) {
  }

  getPredictions(query?: string): Observable<PlacesQueryAutocompleteResponseInterface[]> {
    if (query) {
      return this.http.post<{ predictions: PlacesQueryAutocompleteResponseInterface[] }>(
        this.endpointDirectoryService.getPlacesQueryAutocomplete().url,
        this.generatePlacesQueryAutocompleteRequest(query),
        this.endpointDirectoryService.getPlacesQueryAutocomplete().httpOptions
      ).pipe(map(response => response.predictions));
    } else {
      return of<null[]>([null]);
    }
  }

  generatePlacesQueryAutocompleteRequest(
    input: string,
    offset?: number,
    location?: LatLngInterface,
    radius?: number,
    language?: string
  ): PlacesQueryAutocompleteRequestInterface {
    return {
      input,
      offset,
      location,
      radius,
      language
    };
  }

}
