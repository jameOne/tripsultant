import { createAction, props } from '@ngrx/store';
import { MediaQueriesEntity } from './media-queries.models';
import { EntityMap, Predicate, Update } from '@ngrx/entity';

export enum MediaQueriesActionsEnum {
  LoadMediaQueries = '[MediaQueries/API] Load Media Queries',
  LoadMediaQueriesSuccess = '[MediaQueries/API] Load MediaQueries Success',
  LoadMediaQueriesFailure = '[MediaQueries/API] Load MediaQueries Failure',
  AddMediaQuery = '[MediaQueries/API] Add Media Query',
  SetMediaQuery = '[MediaQueries/API] Set Media Query',
  UpsertMediaQuery = '[MediaQueries/API] Upsert Media Query',
  AddMediaQueries = '[MediaQueries/API] Add Media Queries',
  UpsertMediaQueries = '[MediaQueries/API] Upsert Media Queries',
  UpdateMediaQuery = '[MediaQueries/API] Update Media Query',
  UpdateMediaQueries = '[MediaQueries/API] Update Media Queries',
  MapMediaQueries = '[MediaQueries/API] Map Media Queries',
  DeleteMediaQuery = '[MediaQueries/API] Delete Media Query',
  DeleteMediaQueries = '[MediaQueries/API] Delete Media Queries',
  DeleteMediaQueriesByPredicate = '[MediaQueries/API] Delete Media Queries By Predicate',
  ClearMediaQueries = '[MediaQueries/API] Clear Media Queries',
  SelectMediaQuery = '[MediaQueries/API] Select Media Query by ID'
}

export const loadMediaQueries = createAction(MediaQueriesActionsEnum.LoadMediaQueries);
export const loadMediaQueriesSuccess = createAction(MediaQueriesActionsEnum.LoadMediaQueriesSuccess, props<{ mediaQueries: MediaQueriesEntity[] }>());
export const selectMediaQuery = createAction(MediaQueriesActionsEnum.SelectMediaQuery, props<{ id: string }>());
export const loadMediaQueriesFailure = createAction(MediaQueriesActionsEnum.LoadMediaQueriesFailure, props<{ error: any }>());
export const addMediaQuery = createAction(MediaQueriesActionsEnum.AddMediaQuery, props<{ mediaQuery: MediaQueriesEntity }>());
export const setMediaQuery = createAction(MediaQueriesActionsEnum.SetMediaQuery, props<{ mediaQuery: MediaQueriesEntity }>());
export const upsertMediaQuery = createAction(MediaQueriesActionsEnum.UpsertMediaQuery, props<{ mediaQuery: MediaQueriesEntity }>());
export const addMediaQueries = createAction(MediaQueriesActionsEnum.AddMediaQueries, props<{ mediaQueries: MediaQueriesEntity[] }>());
export const upsertMediaQueries = createAction(MediaQueriesActionsEnum.UpsertMediaQueries, props<{ mediaQueries: MediaQueriesEntity[] }>());
export const updateMediaQuery = createAction(MediaQueriesActionsEnum.UpdateMediaQuery, props<{ update: Update<MediaQueriesEntity> }>());
export const updateMediaQueries = createAction(MediaQueriesActionsEnum.UpdateMediaQueries, props<{ updates: Update<MediaQueriesEntity>[] }>());
export const mapMediaQueries = createAction(MediaQueriesActionsEnum.MapMediaQueries, props<{ entityMap: EntityMap<MediaQueriesEntity> }>());
export const deleteMediaQuery = createAction(MediaQueriesActionsEnum.DeleteMediaQuery, props<{ id: string }>());
export const deleteMediaQueries = createAction(MediaQueriesActionsEnum.DeleteMediaQueries, props<{ ids: string[] }>());
export const deleteMediaQueriesByPredicate = createAction(MediaQueriesActionsEnum.DeleteMediaQueriesByPredicate, props<{ predicate: Predicate<MediaQueriesEntity> }>());
export const clearMediaQueries = createAction(MediaQueriesActionsEnum.ClearMediaQueries);
