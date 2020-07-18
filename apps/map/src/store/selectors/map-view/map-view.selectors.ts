import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../states/app/app.state';
import { MapViewStateInterface } from '../../states/map-view/map-view.state';

const selectMapViews = (state: AppStateInterface) => state.mapViews;

export const selectTileLayerOptionsHistoriesList = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.tileLayerOptionsHistories
);

export const selectTileLayerURLHistoriesList = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.tileLayerURLHistories
);

export const selectZoomHistoriesList = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.zoomHistories
);

export const selectCenterHistoriesList = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.centerHistories
);

export const selectCentroidHistoriesList = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.centroidHistories
);

export const selectFitToBoundsArray = createSelector(
  selectMapViews,
  (state: MapViewStateInterface) => state.fitToBounds
);
