import { createAction, props } from '@ngrx/store';
import { DirectionsInterface } from '~models/directions/directions.interface';
import {
  DistanceMatrixElementInterface
} from '~models/google-services/distance-matrix.interface';
import {
  DirectionsResponseInterface
} from '~models/google-services/directions.interface';

export enum DirectionsActionsEnum {
  RemoveDirectionsGroup = '[Directions] Remove directions by index.',
  UpdateDirectionsGroup = '[Directions] Update directions response.',
  SetSelectedDistanceMatrixElements = '[Directions] Set selected distance matrix elements.',
  SetCurrentDistanceInMeters = '[Directions] Set current distance in meters.',
  RemoveCurrentDistanceInMeters = '[Directions] Remove current distance in meters.',
  SetCurrentDurationInSeconds = '[Directions] Set current duration in seconds.',
  RemoveCurrentDurationInSeconds = '[Directions] Remove current duration in seconds.',

  RemoveRouteGroup = '[Directions] Remove route directions by index.',
  RemoveRouteFormGroup = '[Directions] Remove route directions from by index.',
  UpdateRouteResponseGroup = '[Directions] Update route directions response.',

  AddDirectionsGroup = '[Directions] Add directions group.',
  // AddSelectedDistanceMatrixElementsGroup = '[Directions] Add selected distance matrix elements group,',
  AddDirectionsResponsesGroup = '[Directions] Add directions responses group.',

  PushDirectionsCarButton = '[Directions] User selected directions car button.',
  PushDirectionsTransitButton = '[Directions] User selected directions transit button.',
  PushDirectionsWalkButton = '[Directions] User selected directions walk button.',
  PushDirectionsFlyButton = '[Directions] User selected directions fly button.',

  UpdateSelectedRoute = '[Directions] Add entry in selected route.',
}

export const pushDirectionsFlyButton = createAction(
  DirectionsActionsEnum.PushDirectionsFlyButton
);

export const pushDirectionsWalkButton = createAction(
  DirectionsActionsEnum.PushDirectionsWalkButton
);

export const pushDirectionsTransitButton = createAction(
  DirectionsActionsEnum.PushDirectionsTransitButton
);

export const pushDirectionsCarButton = createAction(
  DirectionsActionsEnum.PushDirectionsCarButton
);

export const addDirectionsGroup = createAction(
  DirectionsActionsEnum.AddDirectionsGroup
);

export interface UpdateSelectedRoutePropInterface {
  tripIndex: number;
  routeIndex: number;
}

export const updateSelectedRoute = createAction(
  DirectionsActionsEnum.UpdateSelectedRoute,
  props<UpdateSelectedRoutePropInterface>()
);

// export const addSelectedDistanceMatrixElementsGroup = createAction(
//   DirectionsActionsEnum.AddSelectedDistanceMatrixElementsGroup,
// );

export const addDirectionsResponsesGroup = createAction(
  DirectionsActionsEnum.AddDirectionsResponsesGroup
);

export interface RemoveCurrentDurationInSecondsPropInterface {
  index: number;
}

export const removeCurrentDurationInSeconds = createAction(
  DirectionsActionsEnum.RemoveCurrentDurationInSeconds,
  props<RemoveCurrentDurationInSecondsPropInterface>()
);

export interface RemoveCurrentDistanceInMetersPropInterface {
  index: number;
}

export const removeCurrentDistanceInMeters = createAction(
  DirectionsActionsEnum.RemoveCurrentDistanceInMeters,
  props<RemoveCurrentDistanceInMetersPropInterface>()
);

export interface RemoveDirectionsGroupPropInterface {
  index: number;
}

export const removeDirectionsGroup = createAction(
  DirectionsActionsEnum.RemoveDirectionsGroup,
  props<RemoveDirectionsGroupPropInterface>()
);

export interface UpdateDirectionsGroupPropInterface {
  index: number;
  directions: DirectionsInterface;
}

export const updateDirectionsGroup = createAction(
  DirectionsActionsEnum.UpdateDirectionsGroup,
  props<UpdateDirectionsGroupPropInterface>()
);

export interface SetSelectedDistanceMatrixElementsPropInterface {
  index: number;
  distanceMatrixElements: DistanceMatrixElementInterface[];
}

export const setSelectedDistanceMatrixElements = createAction(
  DirectionsActionsEnum.SetSelectedDistanceMatrixElements,
  props<SetSelectedDistanceMatrixElementsPropInterface>()
);

export interface SetCurrentDistanceInMetersPropInterface {
  index: number;
  distanceInMeters: number;
}

export const setCurrentDistanceInMeters = createAction(
  DirectionsActionsEnum.SetCurrentDistanceInMeters,
  props<SetCurrentDistanceInMetersPropInterface>()
);

export interface SetCurrentDurationInSecondsPropInterface {
  index: number;
  durationInSeconds: number;
}

export const setCurrentDurationInSeconds = createAction(
  DirectionsActionsEnum.SetCurrentDurationInSeconds,
  props<SetCurrentDurationInSecondsPropInterface>()
);

export interface RemoveRouteGroupPropInterface {
  index: number;
}

export const removeRouteGroup = createAction(
  DirectionsActionsEnum.RemoveRouteGroup,
  props<RemoveRouteGroupPropInterface>()
);

export interface RemoveRoutePropInterface {
  index: number;
}

export const removeRouteFormGroup = createAction(
  DirectionsActionsEnum.RemoveRouteFormGroup,
  props<RemoveRoutePropInterface>()
);

export interface UpdateRouteResponseGroupPropInterface {
  index: number;
  directionsResponse: DirectionsResponseInterface;
}

export const updateRouteResponseGroup = createAction(
  DirectionsActionsEnum.UpdateRouteResponseGroup,
  props<UpdateRouteResponseGroupPropInterface>()
);
