export interface IGeolocationCoordinates {
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
export interface INavigatorGeolocation {
  coords: IGeolocationCoordinates;
  timestamp: number;
}


/**
 * Interface for the 'NavigatorGeolocation' data
 */
export interface NavigatorGeolocationEntity {
  id: string; // Primary ID
  position: INavigatorGeolocation
}

export const nullPosition = {
  coords: {
    accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null
  },
  timestamp: null
}
