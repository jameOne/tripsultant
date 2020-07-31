import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ATLASES_FEATURE_KEY,
  State,
  AtlasesPartialState,
  atlasesAdapter,
} from './atlases.reducer';

// Lookup the 'Atlases' feature state managed by NgRx
export const getAtlasesState = createFeatureSelector<
  AtlasesPartialState,
  State
>(ATLASES_FEATURE_KEY);

const { selectAll, selectEntities } = atlasesAdapter.getSelectors();

export const getAtlasesLoaded = createSelector(
  getAtlasesState,
  (state: State) => state.loaded
);

export const getAtlasesError = createSelector(
  getAtlasesState,
  (state: State) => state.error
);

export const getAllAtlases = createSelector(getAtlasesState, (state: State) =>
  selectAll(state)
);

export const getAtlasesEntities = createSelector(
  getAtlasesState,
  (state: State) => selectEntities(state)
);

export const getSelectedAtlasId = createSelector(
  getAtlasesState,
  (state: State) => state.selectedId
);

export const getSelectedAtlas = createSelector(
  getAtlasesEntities,
  getSelectedAtlasId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
