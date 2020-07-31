import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MapsActions from './maps.actions';
import { IMapsEntity } from './maps.models';

export const MAPS_FEATURE_KEY = 'maps';

export interface MapsState extends EntityState<IMapsEntity> {
  selectedId?: string; // which Maps record has been selected
  loaded: boolean; // has the Maps list been loaded
  error?: string | null; // last known error (if any)
}

export interface MapsPartialState {
  readonly [MAPS_FEATURE_KEY]: MapsState;
}

export const mapsAdapter: EntityAdapter<IMapsEntity> = createEntityAdapter<
  IMapsEntity
>();

export const initialMapsState: MapsState = mapsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const mapsReducer = createReducer(
  initialMapsState,
  on(MapsActions.loadMaps, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MapsActions.loadMapsSuccess, (state, { maps }) =>
    mapsAdapter.setAll(maps, { ...state, loaded: true })
  ),
  on(MapsActions.loadMapsFailure, (state, { error }) => ({ ...state, error })),
  on(MapsActions.selectMap, (state, {id}) => ({
    ...state,
    selectedId: state.entities[id] !== undefined ? id : undefined
  })),
  on(MapsActions.addMap, (state, { map }) => {
    return mapsAdapter.addOne(map, state);
  }),
  on(MapsActions.setMap, (state, { map }) => {
    return mapsAdapter.setOne(map, state);
  }),
  on(MapsActions.upsertMap, (state, { map }) => {
    return mapsAdapter.upsertOne(map, state);
  }),
  on(MapsActions.addMaps, (state, { maps }) => {
    return mapsAdapter.addMany(maps, state);
  }),
  on(MapsActions.upsertMaps, (state, { maps }) => {
    return mapsAdapter.upsertMany(maps, state);
  }),
  on(MapsActions.updateMap, (state, { update }) => {
    return mapsAdapter.updateOne(update, state);
  }),
  on(MapsActions.updateMaps, (state, { updates }) => {
    return mapsAdapter.updateMany(updates, state);
  }),
  on(MapsActions.mapMaps, (state, { entityMap }) => {
    return mapsAdapter.map(entityMap, state);
  }),
  on(MapsActions.deleteMap, (state, { id }) => {
    return mapsAdapter.removeOne(id, state);
  }),
  on(MapsActions.deleteMaps, (state, { ids }) => {
    return mapsAdapter.removeMany(ids, state);
  }),
  on(MapsActions.deleteMapsByPredicate, (state, { predicate }) => {
    return mapsAdapter.removeMany(predicate, state);
  }),
  on(MapsActions.clearMaps, state => {
    return mapsAdapter.removeAll({ ...state, selectedId: null });
  })
);

export function MAPS_REDUCER(state: MapsState | undefined, action: Action) {
  return mapsReducer(state, action);
}
