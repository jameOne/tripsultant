import { createAction, props } from '@ngrx/store';
import {
  MapOptionsHistoryInterface
} from '~models/map-view/map-view.interface';
import { LatLng, TileLayerOptions } from 'leaflet';

export enum MapViewActionsEnum {
  AddMapOptionsHistory = '[Map View] Add map view options.',
  RemoveMapOptionsHistory = '[Map View] Remove map view options.',

  AddTileLayerOptionsHistory = '[Map View] Add tile layer options.',
  UpdateTileLayerOptionsHistory = '[Map View] Add entry (update) to tile layer options history.',
  RemoveTileLayerOptionsHistory = '[Map View] Remove tile layer options history.',

  AddTileLayerURLHistory = '[Map View] Add tile layer url history.',
  UpdateTileLayerURLHistory = '[Map View] Add entry (update) to tile layer url history.',
  RemoveTileLayerURLHistory = '[Map View] Remove tile layer url history.',

  AddZoomHistory = '[Map View] Add zoom history.',
  UpdateZoomHistory = '[Map View] Add entry (update) to zoom history.',
  RemoveZoomHistory = '[Map View] Remove zoom history.',

  AddCenterHistory = '[Map View] Add center history.',
  UpdateCenterHistory = '[Map View] Add entry (update) to center history.',
  RemoveCenterHistory = '[Map View] Remove center history.',

  AddCentroidHistory = '[Map View] Add centroid history.',
  UpdateCentroidHistory = '[Map View] Add entry (update) to centroid history.',
  RemoveCentroidHistory = '[Map View] Remove centroid history.',

  AddFitToBoundsBoolean = '[Map View] Add a boolean value to coordinate the triggering automatic bound fitting.',
  SetFitToBoundsTrue = '[Map View] Set bound fitting boolean to true by index.',
  SetFitToBoundsFalse = '[Map View] Set bound fitting boolean to false by index.',
  RemoveFitToBoundsBoolean = '[Map View] Remove boolean value to coordinate the triggering automatic bound fitting.',
}

export const removeFitToBoundsBoolean = createAction(
  MapViewActionsEnum.RemoveFitToBoundsBoolean,
  props<{ index: number }>()
);

export const addFitToBoundsBoolean = createAction(
  MapViewActionsEnum.AddFitToBoundsBoolean
);

export const setFitToBoundsTrue = createAction(
  MapViewActionsEnum.SetFitToBoundsTrue,
  props<{ index: number }>()
);

export const setFitToBoundsFalse = createAction(
  MapViewActionsEnum.SetFitToBoundsFalse,
  props<{ index: number }>()
);

export const addMapOptionsHistory = createAction(
  MapViewActionsEnum.AddMapOptionsHistory,
  props<{ mapOptionsHistoryInterface: MapOptionsHistoryInterface }>()
);

export const removeMapOptionsHistory = createAction(
  MapViewActionsEnum.RemoveMapOptionsHistory,
  props<{ index: number }>()
);

export const addTileLayerURLHistory = createAction(
  MapViewActionsEnum.AddTileLayerURLHistory,
  props<{ tileLayerURLs: string[] }>()
);

export const updateTileLayerURLHistory = createAction(
  MapViewActionsEnum.UpdateTileLayerURLHistory,
  props<{ index: number, tileLayerURLs: string[] }>()
);

export const removeTileLayerURLHistory = createAction(
  MapViewActionsEnum.RemoveTileLayerURLHistory,
  props<{ index: number }>()
);

export const addTileLayerOptionsHistory = createAction(
  MapViewActionsEnum.AddTileLayerOptionsHistory,
  props<{ tileLayerOptions: TileLayerOptions[] }>()
);

export const updateTileLayerOptionsHistory = createAction(
  MapViewActionsEnum.UpdateTileLayerOptionsHistory,
  props<{ index: number, tileLayerOptions: TileLayerOptions[] }>()
);

export const removeTileLayerOptionsHistory = createAction(
  MapViewActionsEnum.RemoveTileLayerOptionsHistory,
  props<{ index: number }>()
);

export const addZoomHistory = createAction(
  MapViewActionsEnum.AddZoomHistory,
  props<{ zooms: number[] }>()
);

export const updateZoomHistory = createAction(
  MapViewActionsEnum.UpdateZoomHistory,
  props<{ index: number, zooms: number[] }>()
);

export const removeZoomHistory = createAction(
  MapViewActionsEnum.RemoveZoomHistory,
  props<{ index: number }>()
);

export const addCenterHistory = createAction(
  MapViewActionsEnum.AddCenterHistory,
  props<{ centers: LatLng[] }>()
);

export const updateCenterHistory = createAction(
  MapViewActionsEnum.UpdateCenterHistory,
  props<{ index: number, centers: LatLng[] }>()
);

export const removeCenterHistory = createAction(
  MapViewActionsEnum.RemoveCenterHistory,
  props<{ index: number }>()
);

export const addCentroidHistory = createAction(
  MapViewActionsEnum.AddCentroidHistory,
  props<{ centroids: LatLng[] }>()
);

export const updateCentroidHistory = createAction(
  MapViewActionsEnum.UpdateCentroidHistory,
  props<{ index: number, centroids: LatLng[] }>()
);

export const removeCentroidHistory = createAction(
  MapViewActionsEnum.RemoveCentroidHistory,
  props<{ index: number }>()
);
