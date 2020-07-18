import { Action, createReducer, on } from '@ngrx/store';
import {
  initialWaypointLocationDialogState,
  WaypointLocationDialogStateInterface
} from '~store/states/add-waypoint-dialog/add-trip-dialog.state';
import {
  closeWaypointLocationDialog,
  openWaypointLocationDialog, toggleWaypointLocationDialog
} from '~store/actions/add-waypoint-dialog/add-waypoint-dialog.actions';

const reducer = createReducer(
  initialWaypointLocationDialogState,
  on(openWaypointLocationDialog, state => ({ ...state, isOpen: true })),
  on(closeWaypointLocationDialog, state => ({ ...state, isOpen: false })),
  on(toggleWaypointLocationDialog, state => ({ ...state, isOpen: !state.isOpen }))
);

export function waypointLocationDialogReducer(state: WaypointLocationDialogStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
