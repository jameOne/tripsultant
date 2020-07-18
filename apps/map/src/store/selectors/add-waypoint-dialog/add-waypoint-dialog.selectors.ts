import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../states/app/app.state';
import { WaypointLocationDialogStateInterface } from '../../states/add-waypoint-dialog/add-trip-dialog.state';

const waypointLocationDialog = (state: AppStateInterface) => state.waypointLocationDialog;

export const selectWaypointLocationDialogIsOpen = createSelector(
  waypointLocationDialog,
  (state: WaypointLocationDialogStateInterface) => state.isOpen
);
