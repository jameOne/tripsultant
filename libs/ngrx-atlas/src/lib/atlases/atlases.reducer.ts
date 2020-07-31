import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AtlasesActions from './atlases.actions';
import { IAtlasesEntity } from './atlases.models';

export const ATLASES_FEATURE_KEY = 'atlases';

export interface IAtlasesState extends EntityState<IAtlasesEntity> {
  selectedId?: string; // which Atlases record has been selected
  loaded: boolean; // has the Atlases list been loaded
  error?: string | null; // last known error (if any)
}

export interface AtlasesPartialState {
  readonly [ATLASES_FEATURE_KEY]: IAtlasesState;
}

export const atlasesAdapter: EntityAdapter<IAtlasesEntity> = createEntityAdapter<
  IAtlasesEntity
>();

export const initialAtlasesState: IAtlasesState = atlasesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const atlasesReducer = createReducer(
  initialAtlasesState,
  on(AtlasesActions.loadAtlases, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AtlasesActions.loadAtlasesSuccess, (state, { atlases }) =>
    atlasesAdapter.setAll(atlases, { ...state, loaded: true })
  ),
  on(AtlasesActions.loadAtlasesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AtlasesActions.selectAtlas, (state, {id}) => ({
    ...state,
    selectedId: state.entities[id] !== undefined ? id : undefined
  })),
  on(AtlasesActions.addAtlas, (state, { atlas }) => {
    return atlasesAdapter.addOne(atlas, state);
  }),
  on(AtlasesActions.setAtlas, (state, { atlas }) => {
    return atlasesAdapter.setOne(atlas, state);
  }),
  on(AtlasesActions.upsertAtlas, (state, { atlas }) => {
    return atlasesAdapter.upsertOne(atlas, state);
  }),
  on(AtlasesActions.addAtlases, (state, { atlases }) => {
    return atlasesAdapter.addMany(atlases, state);
  }),
  on(AtlasesActions.upsertAtlases, (state, { atlases }) => {
    return atlasesAdapter.upsertMany(atlases, state);
  }),
  on(AtlasesActions.updateAtlas, (state, { update }) => {
    return atlasesAdapter.updateOne(update, state);
  }),
  on(AtlasesActions.updateAtlases, (state, { updates }) => {
    return atlasesAdapter.updateMany(updates, state);
  }),
  on(AtlasesActions.mapAtlases, (state, { entityMap }) => {
    return atlasesAdapter.map(entityMap, state);
  }),
  on(AtlasesActions.deleteAtlas, (state, { id }) => {
    return atlasesAdapter.removeOne(id, state);
  }),
  on(AtlasesActions.deleteAtlases, (state, { ids }) => {
    return atlasesAdapter.removeMany(ids, state);
  }),
  on(AtlasesActions.deleteAtlasesByPredicate, (state, { predicate }) => {
    return atlasesAdapter.removeMany(predicate, state);
  }),
  on(AtlasesActions.clearAtlases, state => {
    return atlasesAdapter.removeAll({ ...state, selectedId: null });
  })
);

export function ATLASES_REDUCER(state: IAtlasesState | undefined, action: Action) {
  return atlasesReducer(state, action);
}
