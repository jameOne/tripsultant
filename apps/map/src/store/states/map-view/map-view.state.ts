import { LatLng, TileLayerOptions } from 'leaflet';


export interface MapViewStateInterface {
  centroidHistories: LatLng[][];
  centerHistories: LatLng[][];
  zoomHistories: number[][];
  tileLayerURLHistories: string[][];
  tileLayerOptionsHistories: TileLayerOptions[][];
  fitToBounds: boolean[];
}

export const initialMapViewState: MapViewStateInterface = {
  centroidHistories: [],
  centerHistories: [],
  zoomHistories: [],
  tileLayerURLHistories: [],
  tileLayerOptionsHistories: [],
  fitToBounds: []
};
