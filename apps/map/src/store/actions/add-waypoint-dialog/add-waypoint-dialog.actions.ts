import { createAction } from '@ngrx/store';

export enum WaypointLocationDialogActionsEnum {
  OpenWaypointLocationDialog = '[Waypoint Location Dialog] Open trip name dialog.',
  CloseWaypointLocationDialog = '[Waypoint Location Dialog] Close trip name dialog.',
  ToggleWaypointLocationDialog = '[Waypoint Location Dialog] Toggle trip name dialog.',
}

export const closeWaypointLocationDialog = createAction(WaypointLocationDialogActionsEnum.CloseWaypointLocationDialog);
export const openWaypointLocationDialog = createAction(WaypointLocationDialogActionsEnum.OpenWaypointLocationDialog);
export const toggleWaypointLocationDialog = createAction(WaypointLocationDialogActionsEnum.ToggleWaypointLocationDialog);
