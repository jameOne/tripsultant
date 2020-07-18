export interface GeolocationCoordinatesInterface {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
}

// This interface is essentially a non-readonly
// version of es5 TS `Position`, except for all values
// may be null.
export interface NavigatorGeolocationInterface {
  coords: GeolocationCoordinatesInterface;
  timestamp: number;
}
