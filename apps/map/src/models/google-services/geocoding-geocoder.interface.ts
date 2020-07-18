import { LatLngBoundsInterface, LatLngInterface } from '../map-view/lat-lng.interface';

export interface AddressGeometryInterface {
  location: LatLngInterface;
  location_type: string;
  bounds: LatLngBoundsInterface;
  viewport: LatLngBoundsInterface;
  types: string[];
}

export interface AddressComponentInterface {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface AddressPlusCodeInterface {
  global_code: string;
  compound_code: string;
}

export interface GeocodingGeocoderResponseInterface {
  address_components: AddressComponentInterface[];
  formatted_address: string;
  geometry: AddressGeometryInterface;
  types: string[];
  place_id: string;
  partial_match: boolean;
  plus_code: AddressPlusCodeInterface;
}

export interface GeocodingGeocoderRequestInterface {
  address: string;
  components: { [key: string]: string };
  bounds: LatLngBoundsInterface;
  region: string;
  latLng: LatLngInterface;
  resultType: string[];
  locationType: string;
  placeID: string;
  language: string;
  custom: { [key: string]: string[] };
}
