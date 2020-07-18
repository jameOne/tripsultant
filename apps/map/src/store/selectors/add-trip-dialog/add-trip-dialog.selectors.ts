import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '~store/states/app/app.state';
import { TripNameDialogOpenStateInterface } from '~store/states/add-trip-dialog/add-trip-dialog.state';

const tripNameDialog = (state: AppStateInterface) => state.tripNameDialog;

export const selectTripNameDialogIsOpen = createSelector(
  tripNameDialog,
  (state: TripNameDialogOpenStateInterface) => state.isOpen
);
