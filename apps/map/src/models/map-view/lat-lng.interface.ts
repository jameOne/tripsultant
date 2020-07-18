export interface LatLngInterface {
  lat: number;
  lng: number;
}

export interface LatLngBoundsInterface {
  northEast: LatLngInterface;
  southWest: LatLngInterface;
}
