import { createAction, props } from '@ngrx/store';
import { IAtlasesEntity } from './atlases.models';
import { EntityMap, Predicate, Update } from '@ngrx/entity';

export enum AtlasesActionsEnum {
  LoadAtlases = '[Atlases/API] Load Atlases',
  LoadAtlasesSuccess = '[Atlases/API] Load Atlases Success',
  LoadAtlasesFailure = '[Atlases/API] Load Atlases Failure',
  AddAtlas = '[Atlases/API] Add Atlas',
  SetAtlas = '[Atlases/API] Set Atlas',
  UpsertAtlas = '[Atlases/API] Upsert Atlas',
  AddAtlases = '[Atlases/API] Add Atlases',
  UpsertAtlases = '[Atlases/API] Upsert Atlases',
  UpdateAtlas = '[Atlases/API] Update Atlas',
  UpdateAtlases = '[Atlases/API] Update Atlases',
  AtlasAtlases = '[Atlases/API] Atlas Atlases',
  DeleteAtlas = '[Atlases/API] Delete Atlas',
  DeleteAtlases = '[Atlases/API] Delete Atlases',
  DeleteAtlasesByPredicate = '[Atlases/API] Delete Atlases By Predicate',
  ClearAtlases = '[Atlases/API] Clear Atlases',
  SelectAtlas = '[Atlases/API] Select Atlas by ID'
}

export const loadAtlases = createAction(AtlasesActionsEnum.LoadAtlases);
export const loadAtlasesSuccess = createAction(AtlasesActionsEnum.LoadAtlasesSuccess, props<{ atlases: IAtlasesEntity[] }>());
export const selectAtlas = createAction(AtlasesActionsEnum.SelectAtlas, props<{ id: string }>());
export const loadAtlasesFailure = createAction(AtlasesActionsEnum.LoadAtlasesFailure, props<{ error: any }>());
export const addAtlas = createAction(AtlasesActionsEnum.AddAtlas, props<{ atlas: IAtlasesEntity }>());
export const setAtlas = createAction(AtlasesActionsEnum.SetAtlas, props<{ atlas: IAtlasesEntity }>());
export const upsertAtlas = createAction(AtlasesActionsEnum.UpsertAtlas, props<{ atlas: IAtlasesEntity }>());
export const addAtlases = createAction(AtlasesActionsEnum.AddAtlases, props<{ atlases: IAtlasesEntity[] }>());
export const upsertAtlases = createAction(AtlasesActionsEnum.UpsertAtlases, props<{ atlases: IAtlasesEntity[] }>());
export const updateAtlas = createAction(AtlasesActionsEnum.UpdateAtlas, props<{ update: Update<IAtlasesEntity> }>());
export const updateAtlases = createAction(AtlasesActionsEnum.UpdateAtlases, props<{ updates: Update<IAtlasesEntity>[] }>());
export const mapAtlases = createAction(AtlasesActionsEnum.AtlasAtlases, props<{ entityMap: EntityMap<IAtlasesEntity> }>());
export const deleteAtlas = createAction(AtlasesActionsEnum.DeleteAtlas, props<{ id: string }>());
export const deleteAtlases = createAction(AtlasesActionsEnum.DeleteAtlases, props<{ ids: string[] }>());
export const deleteAtlasesByPredicate = createAction(AtlasesActionsEnum.DeleteAtlasesByPredicate, props<{ predicate: Predicate<IAtlasesEntity> }>());
export const clearAtlases = createAction(AtlasesActionsEnum.ClearAtlases);
