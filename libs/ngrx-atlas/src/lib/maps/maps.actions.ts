import { createAction, props } from '@ngrx/store';
import { IMapsEntity } from './maps.models';
import { EntityMap, Predicate, Update } from '@ngrx/entity';

export enum MapsActionsEnum {
  LoadMaps = '[Maps/API] Load Maps',
  LoadMapsSuccess = '[Maps/API] Load Maps Success',
  LoadMapsFailure = '[Maps/API] Load Maps Failure',
  AddMap = '[Maps/API] Add Map',
  SetMap = '[Maps/API] Set Map',
  UpsertMap = '[Maps/API] Upsert Map',
  AddMaps = '[Maps/API] Add Maps',
  UpsertMaps = '[Maps/API] Upsert Maps',
  UpdateMap = '[Maps/API] Update Map',
  UpdateMaps = '[Maps/API] Update Maps',
  MapMaps = '[Maps/API] Map Maps',
  DeleteMap = '[Maps/API] Delete Map',
  DeleteMaps = '[Maps/API] Delete Maps',
  DeleteMapsByPredicate = '[Maps/API] Delete Maps By Predicate',
  ClearMaps = '[Maps/API] Clear Maps',
  SelectMap = '[Maps/API] Select Map by ID'
}

export const loadMaps = createAction(MapsActionsEnum.LoadMaps);
export const loadMapsSuccess = createAction(MapsActionsEnum.LoadMapsSuccess, props<{ maps: IMapsEntity[] }>());
export const selectMap = createAction(MapsActionsEnum.SelectMap, props<{ id: string }>());
export const loadMapsFailure = createAction(MapsActionsEnum.LoadMapsFailure, props<{ error: any }>());
export const addMap = createAction(MapsActionsEnum.AddMap, props<{ map: IMapsEntity }>());
export const setMap = createAction(MapsActionsEnum.SetMap, props<{ map: IMapsEntity }>());
export const upsertMap = createAction(MapsActionsEnum.UpsertMap, props<{ map: IMapsEntity }>());
export const addMaps = createAction(MapsActionsEnum.AddMaps, props<{ maps: IMapsEntity[] }>());
export const upsertMaps = createAction(MapsActionsEnum.UpsertMaps, props<{ maps: IMapsEntity[] }>());
export const updateMap = createAction(MapsActionsEnum.UpdateMap, props<{ update: Update<IMapsEntity> }>());
export const updateMaps = createAction(MapsActionsEnum.UpdateMaps, props<{ updates: Update<IMapsEntity>[] }>());
export const mapMaps = createAction(MapsActionsEnum.MapMaps, props<{ entityMap: EntityMap<IMapsEntity> }>());
export const deleteMap = createAction(MapsActionsEnum.DeleteMap, props<{ id: string }>());
export const deleteMaps = createAction(MapsActionsEnum.DeleteMaps, props<{ ids: string[] }>());
export const deleteMapsByPredicate = createAction(MapsActionsEnum.DeleteMapsByPredicate, props<{ predicate: Predicate<IMapsEntity> }>());
export const clearMaps = createAction(MapsActionsEnum.ClearMaps);
