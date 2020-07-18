import { Action, createReducer, on } from '@ngrx/store';
import {
  initialTripNameDialogState, TripNameDialogOpenStateInterface
} from '~store/states/add-trip-dialog/add-trip-dialog.state';
import {
  closeTripNameDialog,
  openTripNameDialog, toggleTripNameDialog
} from '~store/actions/add-trip-dialog/add-trip-dialog.actions';

const reducer = createReducer(
  initialTripNameDialogState,
  on(openTripNameDialog, state => ({ ...state, isOpen: true })),
  on(closeTripNameDialog, state => ({ ...state, isOpen: false })),
  on(toggleTripNameDialog, state => ({ ...state, isOpen: !state.isOpen }))
);

export function tripNameDialogReducer(state: TripNameDialogOpenStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
