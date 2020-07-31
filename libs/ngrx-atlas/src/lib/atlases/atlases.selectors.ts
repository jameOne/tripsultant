import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ATLASES_FEATURE_KEY,
  IAtlasesState,
  AtlasesPartialState,
  atlasesAdapter,
} from './atlases.reducer';

// Lookup the 'Atlases' feature state managed by NgRx
export const getAtlasesState = createFeatureSelector<
  AtlasesPartialState,
  IAtlasesState
>(ATLASES_FEATURE_KEY);

const { selectAll, selectEntities } = atlasesAdapter.getSelectors();

export const getAtlasesLoaded = createSelector(
  getAtlasesState,
  (state: IAtlasesState) => state.loaded
);

export const getAtlasesError = createSelector(
  getAtlasesState,
  (state: IAtlasesState) => state.error
);

export const getAllAtlases = createSelector(getAtlasesState, (state: IAtlasesState) =>
  selectAll(state)
);

export const getAtlasesEntities = createSelector(
  getAtlasesState,
  (state: IAtlasesState) => selectEntities(state)
);

export const getSelectedAtlasId = createSelector(
  getAtlasesState,
  (state: IAtlasesState) => state.selectedId
);

export const getSelectedAtlas = createSelector(
  getAtlasesEntities,
  getSelectedAtlasId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
