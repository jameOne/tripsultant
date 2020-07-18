import { Action, createReducer, on } from '@ngrx/store';
import { initialMapViewState, MapViewStateInterface } from '../../states/map-view/map-view.state';
import {
  addTileLayerOptionsHistory,
  updateTileLayerOptionsHistory,
  removeTileLayerOptionsHistory,
  addTileLayerURLHistory,
  updateTileLayerURLHistory,
  removeTileLayerURLHistory,
  addZoomHistory,
  updateZoomHistory,
  removeZoomHistory,
  addCenterHistory,
  updateCenterHistory,
  removeCenterHistory,
  addCentroidHistory,
  updateCentroidHistory,
  removeCentroidHistory,
  setFitToBoundsTrue,
  setFitToBoundsFalse,
  addFitToBoundsBoolean,
  removeFitToBoundsBoolean
} from '../../actions/map-view/map-view.actions';

const reducer = createReducer(
  initialMapViewState,
  on(addTileLayerOptionsHistory, (state, { tileLayerOptions }) => ({
    ...state,
    tileLayerOptionsHistories: [...state.tileLayerOptionsHistories, tileLayerOptions]
  })),
  on(updateTileLayerOptionsHistory, (state, { index, tileLayerOptions }) => ({
    ...state,
    tileLayerOptionsHistories: [
      ...state.tileLayerOptionsHistories.slice(0, index),
      [...state.tileLayerOptionsHistories[index], ...tileLayerOptions],
      ...state.tileLayerOptionsHistories.slice(index + 1)
    ]
  })),
  on(removeTileLayerOptionsHistory, (state, { index }) => ({
    ...state,
    tileLayerOptionsHistories: [
      ...state.tileLayerOptionsHistories.slice(0, index),
      ...state.tileLayerOptionsHistories.slice(index + 1)
    ]
  })),

  // Tile Layer URL
  on(addTileLayerURLHistory, (state, { tileLayerURLs }) => ({
    ...state,
    tileLayerURLHistories: [...state.tileLayerURLHistories, tileLayerURLs]
  })),
  on(updateTileLayerURLHistory, (state, { index, tileLayerURLs }) => ({
    ...state,
    tileLayerURLHistories: [
      ...state.tileLayerURLHistories.slice(0, index),
      [...state.tileLayerURLHistories[index], ...tileLayerURLs],
      ...state.tileLayerURLHistories.slice(index + 1)
    ]
  })),
  on(removeTileLayerURLHistory, (state, { index }) => ({
    ...state,
    tileLayerURLHistories: [
      ...state.tileLayerURLHistories.slice(0, index),
      ...state.tileLayerURLHistories.slice(index + 1)
    ]
  })),

  // Zoom History
  on(addZoomHistory, (state, { zooms }) => ({
    ...state,
    zoomHistories: [...state.zoomHistories, zooms]
  })),
  on(updateZoomHistory, (state, { index, zooms }) => ({
    ...state,
    zoomHistories: (state.zoomHistories[index] !== undefined) ? [
      ...state.zoomHistories.slice(0, index),
      [...state.zoomHistories[index], ...zooms],
      ...state.zoomHistories.slice(index + 1)
    ] : [...state.zoomHistories]
  })),
  on(removeZoomHistory, (state, { index }) => ({
    ...state,
    zoomHistories: [
      ...state.zoomHistories.slice(0, index),
      ...state.zoomHistories.slice(index + 1)
    ]
  })),

  // Center history
  on(addCenterHistory, (state, { centers }) => ({
    ...state,
    centerHistories: [...state.centerHistories, centers]
  })),
  on(updateCenterHistory, (state, { index, centers }) => ({
    ...state,
    centerHistories: (state.centerHistories[index] !== undefined) ? [
      ...state.centerHistories.slice(0, index),
      [...state.centerHistories[index], ...centers],
      ...state.centerHistories.slice(index + 1)
    ] : [...state.centerHistories]
  })),
  on(removeCenterHistory, (state, { index }) => ({
    ...state,
    centerHistories: [
      ...state.centerHistories.slice(0, index),
      ...state.centerHistories.slice(index + 1)
    ]
  })),

  // Centroid History
  on(addCentroidHistory, (state, { centroids }) => ({
    ...state,
    centroidHistories: [...state.centroidHistories, centroids]
  })),
  on(updateCentroidHistory, (state, { index, centroids }) => ({
    ...state,
    centroidHistories: [
      ...state.centroidHistories.slice(0, index),
      [...state.centroidHistories[index], ...centroids],
      ...state.centroidHistories.slice(index + 1)
    ]
  })),
  on(removeCentroidHistory, (state, { index }) => ({
    ...state,
    centroidHistories: [
      ...state.centroidHistories.slice(0, index),
      ...state.centroidHistories.slice(index + 1)
    ]
  })),
  on(addFitToBoundsBoolean, (state) => ({
    ...state,
    fitToBounds: [...state.fitToBounds, false]
  })),
  on(removeFitToBoundsBoolean, (state, { index }) => ({
    ...state,
    fitToBounds: [
      ...state.fitToBounds.slice(0, index),
      ...state.fitToBounds.slice(index + 1)
    ]
  })),
  on(setFitToBoundsTrue, (state, { index }) => ({
    ...state,
    fitToBounds: [
      ...state.fitToBounds.slice(0, index),
      true,
      ...state.fitToBounds.slice(index + 1)
    ]
  })),
  on(setFitToBoundsFalse, (state, { index }) => ({
    ...state,
    fitToBounds: [
      ...state.fitToBounds.slice(0, index),
      false,
      ...state.fitToBounds.slice(index + 1)
    ]
  }))
);

export function mapViewReducer(state: MapViewStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
