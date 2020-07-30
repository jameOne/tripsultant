import { createAction, props } from '@ngrx/store';
import { EntityMap, Predicate, Update } from '@ngrx/entity';
import { NavigatorGeolocationEntity } from './navigator-geolocation.models';

export enum NavigatorGeolocationsActionsEnum {
  LoadNavigatorGeolocations = '[NavigatorGeolocations/API] Load Navigator Geolocations',
  LoadNavigatorGeolocationsSuccess = '[NavigatorGeolocations/API] Load Navigator Geolocations Success',
  LoadNavigatorGeolocationsFailure = '[NavigatorGeolocations/API] Load Navigator Geolocations Failure',
  AddNavigatorGeolocation = '[NavigatorGeolocations/API] Add Navigator Geolocation',
  SetNavigatorGeolocation = '[NavigatorGeolocations/API] Set Navigator Geolocation',
  UpsertNavigatorGeolocation = '[NavigatorGeolocations/API] Upsert Navigator Geolocation',
  AddNavigatorGeolocations = '[NavigatorGeolocations/API] Add Navigator Geolocations',
  UpsertNavigatorGeolocations = '[NavigatorGeolocations/API] Upsert Navigator Geolocations',
  UpdateNavigatorGeolocation = '[NavigatorGeolocations/API] Update Navigator Geolocation',
  UpdateNavigatorGeolocations = '[NavigatorGeolocations/API] Update Navigator Geolocations',
  MapNavigatorGeolocations = '[NavigatorGeolocations/API] Map Navigator Geolocations',
  DeleteNavigatorGeolocation = '[NavigatorGeolocations/API] Delete Navigator Geolocation',
  DeleteNavigatorGeolocations = '[NavigatorGeolocations/API] Delete Navigator Geolocations',
  DeleteNavigatorGeolocationsByPredicate = '[NavigatorGeolocations/API] Delete Navigator Geolocations By Predicate',
  ClearNavigatorGeolocations = '[NavigatorGeolocations/API] Clear Navigator Geolocations',
  SelectNavigatorGeolocation = '[NavigatorGeolocations/API] Select Navigator Geolocation by ID'
}

export const loadNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocations);
export const loadNavigatorGeolocationsSuccess = createAction(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocationsSuccess, props<{ navigatorGeolocations: NavigatorGeolocationEntity[] }>());
export const selectNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.SelectNavigatorGeolocation, props<{ id: string }>());
export const loadNavigatorGeolocationsFailure = createAction(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocationsFailure, props<{ error: any }>());
export const addNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.AddNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationEntity }>());
export const setNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.SetNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationEntity }>());
export const upsertNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.UpsertNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationEntity }>());
export const addNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.AddNavigatorGeolocations, props<{ navigatorGeolocations: NavigatorGeolocationEntity[] }>());
export const upsertNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.UpsertNavigatorGeolocations, props<{ navigatorGeolocations: NavigatorGeolocationEntity[] }>());
export const updateNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.UpdateNavigatorGeolocation, props<{ update: Update<NavigatorGeolocationEntity> }>());
export const updateNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.UpdateNavigatorGeolocations, props<{ updates: Update<NavigatorGeolocationEntity>[] }>());
export const mapNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.MapNavigatorGeolocations, props<{ entityMap: EntityMap<NavigatorGeolocationEntity> }>());
export const deleteNavigatorGeolocation = createAction(NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocation, props<{ id: string }>());
export const deleteNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocations, props<{ ids: string[] }>());
export const deleteNavigatorGeolocationsByPredicate = createAction(NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocationsByPredicate, props<{ predicate: Predicate<NavigatorGeolocationEntity> }>());
export const clearNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.ClearNavigatorGeolocations);
