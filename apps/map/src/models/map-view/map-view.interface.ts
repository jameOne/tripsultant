// MapViews
import { LatLng, LatLngExpression, MapOptions, TileLayerOptions } from 'leaflet';

export interface MapOptionsHistoryInterface {
  mapOptionsHistory: MapOptions[];
}

export interface CentroidHistoryInterface {
  centroidHistory: LatLng[];
}

export interface CenterHistoryInterface {
  centerHistory: LatLng[];
}

export interface ZoomHistoryInterface {
  zoomHistory: number[];
}

export interface FitBoundsHistoryInterface {
  fitBoundsHistory: boolean[];
}

export interface TileLayerURLHistoryInterface {
  tileLayerURLHistory: string[];
}

export interface TileLayerOptionsHistoryInterface {
  tileLayerOptionsHistory: TileLayerOptions[];
}

export interface InteractionHistoryUpdateRequestInterface {
  index: number;
  zoomHistory: number[];
  centerHistory: LatLngExpression[];
}
