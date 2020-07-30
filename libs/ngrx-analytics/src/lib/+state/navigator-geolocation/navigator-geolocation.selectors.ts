import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NAVIGATORGEOLOCATION_FEATURE_KEY,
  NavigatorGeolocationState,
  NavigatorGeolocationPartialState,
  navigatorGeolocationAdapter,
} from './navigator-geolocation.reducer';

// Lookup the 'NavigatorGeolocation' feature state managed by NgRx
export const getNavigatorGeolocationState = createFeatureSelector<
  NavigatorGeolocationPartialState,
  NavigatorGeolocationState
>(NAVIGATORGEOLOCATION_FEATURE_KEY);

const {
  selectAll,
  selectEntities,
} = navigatorGeolocationAdapter.getSelectors();

export const getNavigatorGeolocationLoaded = createSelector(
  getNavigatorGeolocationState,
  (state: NavigatorGeolocationState) => state.loaded
);

export const getNavigatorGeolocationError = createSelector(
  getNavigatorGeolocationState,
  (state: NavigatorGeolocationState) => state.error
);

export const getAllNavigatorGeolocation = createSelector(
  getNavigatorGeolocationState,
  (state: NavigatorGeolocationState) => selectAll(state)
);

export const getNavigatorGeolocationEntities = createSelector(
  getNavigatorGeolocationState,
  (state: NavigatorGeolocationState) => selectEntities(state)
);

export const getSelectedNavigatorGeolocationId = createSelector(
  getNavigatorGeolocationState,
  (state: NavigatorGeolocationState) => state.selectedId
);

export const getSelectedNavigatorGeolocation = createSelector(
  getNavigatorGeolocationEntities,
  getSelectedNavigatorGeolocationId,
  (entities, selectedId) => entities[selectedId]
);
