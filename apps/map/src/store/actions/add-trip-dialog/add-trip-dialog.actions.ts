import { createAction } from '@ngrx/store';

export enum TripNameDialogActionsEnum {
  OpenTripNameDialog = '[Trip Name Dialog] Open trip name dialog.',
  CloseTripNameDialog = '[Trip Name Dialog] Close trip name dialog.',
  ToggleTripNameDialog = '[Trip Name Dialog] Toggle trip name dialog.',
}

export const closeTripNameDialog = createAction(TripNameDialogActionsEnum.CloseTripNameDialog);
export const openTripNameDialog = createAction(TripNameDialogActionsEnum.OpenTripNameDialog);
export const toggleTripNameDialog = createAction(TripNameDialogActionsEnum.ToggleTripNameDialog);
