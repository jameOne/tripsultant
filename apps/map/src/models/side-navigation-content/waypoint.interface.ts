import { GeocodingGeocoderResponseInterface } from '../google-services/geocoding-geocoder.interface';
import { PlacesQueryAutocompleteResponseInterface } from '../google-services/places-query-autocomplete.interface';

export interface WaypointInterface {
  name: string;
  waypoint: PlacesQueryAutocompleteResponseInterface;
  waypointGeocode?: GeocodingGeocoderResponseInterface[];
  parentIndex?: number;
}
