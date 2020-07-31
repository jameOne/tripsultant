import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MAPS_FEATURE_KEY,
  MapsState,
  MapsPartialState,
  mapsAdapter,
} from './maps.reducer';

// Lookup the 'Maps' feature state managed by NgRx
export const getMapsState = createFeatureSelector<MapsPartialState, MapsState>(
  MAPS_FEATURE_KEY
);

const { selectAll, selectEntities } = mapsAdapter.getSelectors();

export const getMapsLoaded = createSelector(
  getMapsState,
  (state: MapsState) => state.loaded
);

export const getMapsError = createSelector(
  getMapsState,
  (state: MapsState) => state.error
);

export const getAllMaps = createSelector(getMapsState, (state: MapsState) =>
  selectAll(state)
);

export const getMapsEntities = createSelector(getMapsState, (state: MapsState) =>
  selectEntities(state)
);

export const getSelectedMapId = createSelector(
  getMapsState,
  (state: MapsState) => state.selectedId
);

export const getSelectedMap = createSelector(
  getMapsEntities,
  getSelectedMapId,
  (entities, selectedId) => entities[selectedId]
);
