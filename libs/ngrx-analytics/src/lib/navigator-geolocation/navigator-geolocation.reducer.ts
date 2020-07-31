import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as NavigatorGeolocationActions from './navigator-geolocation.actions';
import { NavigatorGeolocationEntity } from './navigator-geolocation.models';

export const NAVIGATORGEOLOCATION_FEATURE_KEY = 'navigatorGeolocation';

export interface NavigatorGeolocationState extends EntityState<NavigatorGeolocationEntity> {
  selectedId?: string; // which NavigatorGeolocation record has been selected
  loaded: boolean; // has the NavigatorGeolocation list been loaded
  error?: string | null; // last known error (if any)
}

export interface NavigatorGeolocationPartialState {
  readonly [NAVIGATORGEOLOCATION_FEATURE_KEY]: NavigatorGeolocationState;
}

export const navigatorGeolocationAdapter: EntityAdapter<NavigatorGeolocationEntity> = createEntityAdapter<
  NavigatorGeolocationEntity
>();

export const initialNavigatorGeolocationState: NavigatorGeolocationState = navigatorGeolocationAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const navigatorGeolocationReducer = createReducer(
  initialNavigatorGeolocationState,
  on(NavigatorGeolocationActions.loadNavigatorGeolocations, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    NavigatorGeolocationActions.loadNavigatorGeolocationsSuccess,
    (state, { navigatorGeolocations }) =>
      navigatorGeolocationAdapter.setAll(navigatorGeolocations, {
        ...state,
        loaded: true,
      })
  ),
  on(
    NavigatorGeolocationActions.loadNavigatorGeolocationsFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(NavigatorGeolocationActions.selectNavigatorGeolocation, (state, {id}) => ({
    ...state,
    selectedId: state.entities[id] !== undefined ? id : undefined
  })),
  on(NavigatorGeolocationActions.addNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationAdapter.addOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationActions.setNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationAdapter.setOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationActions.upsertNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationAdapter.upsertOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationActions.addNavigatorGeolocations, (state, { navigatorGeolocations }) => {
    return navigatorGeolocationAdapter.addMany(navigatorGeolocations, state);
  }),
  on(NavigatorGeolocationActions.upsertNavigatorGeolocations, (state, { navigatorGeolocations }) => {
    return navigatorGeolocationAdapter.upsertMany(navigatorGeolocations, state);
  }),
  on(NavigatorGeolocationActions.updateNavigatorGeolocation, (state, { update }) => {
    return navigatorGeolocationAdapter.updateOne(update, state);
  }),
  on(NavigatorGeolocationActions.updateNavigatorGeolocations, (state, { updates }) => {
    return navigatorGeolocationAdapter.updateMany(updates, state);
  }),
  on(NavigatorGeolocationActions.mapNavigatorGeolocations, (state, { entityMap }) => {
    return navigatorGeolocationAdapter.map(entityMap, state);
  }),
  on(NavigatorGeolocationActions.deleteNavigatorGeolocation, (state, { id }) => {
    return navigatorGeolocationAdapter.removeOne(id, state);
  }),
  on(NavigatorGeolocationActions.deleteNavigatorGeolocations, (state, { ids }) => {
    return navigatorGeolocationAdapter.removeMany(ids, state);
  }),
  on(NavigatorGeolocationActions.deleteNavigatorGeolocationsByPredicate, (state, { predicate }) => {
    return navigatorGeolocationAdapter.removeMany(predicate, state);
  }),
  on(NavigatorGeolocationActions.clearNavigatorGeolocations, state => {
    return navigatorGeolocationAdapter.removeAll({ ...state, selectedId: null });
  })
);

export function NAVIGATORGEOLOCATION_REDUCER(state: NavigatorGeolocationState | undefined, action: Action) {
  return navigatorGeolocationReducer(state, action);
}
