import { createAction, props } from '@ngrx/store';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import { GeocodingGeocoderResponseInterface } from '~models/google-services/geocoding-geocoder.interface';
import { PlacesQueryAutocompleteResponseInterface } from '~models/google-services/places-query-autocomplete.interface';

export enum WaypointActionsEnum {
  AddTripWaypoint = '[Waypoint] Add waypoint to trip.',
  ReorderWaypointGroups = '[Waypoint] Reorder waypoint groups.',
  RemoveTripWaypoint = '[Waypoint] Remove waypoint from trip.',
  RemoveTripWaypointsGroup = '[Waypoint] Remove waypoint group from trip.',
  SetSelectedTripWaypointIndex = '[Waypoint] Set selected trip waypoint index.',
  RemoveSelectedTripWaypointIndex = '[Waypoint] Remove selected trip waypoint index.',

  SetSelectedTripWaypointLocation = '[Waypoint] Set selected trip waypoint location.',
  SetSelectedTripWaypointName = '[Waypoint] Set selected trip waypoint name.',
  SetSelectedTripWaypointGeocode = '[Waypoint] Set selected trip waypoint geocode.',
  AddTripWaypointGroup = '[Waypoint] Add trip waypoint group.',

  AddInitialSelectedTripWaypointIndex = '[Waypoint] Add initial selected trip waypoint index.',
}

export const addInitialSelectedTripWaypointIndex = createAction(
  WaypointActionsEnum.AddInitialSelectedTripWaypointIndex
);

export const addTripWaypointGroup = createAction(
  WaypointActionsEnum.AddTripWaypointGroup
);

export const removeSelectedTripWaypointIndex = createAction(
  WaypointActionsEnum.RemoveSelectedTripWaypointIndex,
  props<{ index: number }>()
);

export const setSelectedTripWaypointName = createAction(
  WaypointActionsEnum.SetSelectedTripWaypointName,
  props<{ index: number, name: string }>()
);

export const setSelectedTripWaypointLocation = createAction(
  WaypointActionsEnum.SetSelectedTripWaypointLocation,
  props<{ index: number, waypoint: PlacesQueryAutocompleteResponseInterface }>()
);

export const setSelectedTripWaypointGeocode = createAction(
  WaypointActionsEnum.SetSelectedTripWaypointGeocode,
  props<{ index: number, waypointGeocode: GeocodingGeocoderResponseInterface[]; }>()
);

export const reorderWaypointGroups = createAction(
  WaypointActionsEnum.ReorderWaypointGroups,
  props<{ parentIndex: number, previousChildIndex: number, currentChildIndex: number }>()
);

export const addTripWaypoint = createAction(
  WaypointActionsEnum.AddTripWaypoint,
  props<{ index: number, waypointForm: WaypointInterface }>()
);

export const removeTripWaypointsGroup = createAction(
  WaypointActionsEnum.RemoveTripWaypointsGroup,
  props<{ index: number }>()
);

export const removeTripWaypoint = createAction(
  WaypointActionsEnum.RemoveTripWaypoint,
  props<{ parentIndex: number, childIndex: number }>()
);

export const setSelectedTripWaypointIndex = createAction(
  WaypointActionsEnum.SetSelectedTripWaypointIndex,
  props<{ parentIndex: number, childIndex: number }>()
);
