import { createAction, props } from '@ngrx/store';

import { TripInterface } from '~models/side-navigation-content/trip.interface';

export enum TripActionsEnum {
  RemoveTrip = '[Trip] Remove trip by index.',
  AddTrip = '[Trip] Add (append) trip to trips array.',
  SetSelectedTripIndex = '[Trip] Set selected trip index.',
  RequestTripRemoval = '[Trip] Trip removal requested (alias).',
  SetSelectedTripName = '[Trip] Set selected trip name.',
  SetLastTripRemovalAcknowledgedFlagTrue = '[Trip] Set last trip removal acknowledged value to true.',
  SetLastTripRemovalAcknowledgedFlagFalse = '[Trip] Add a false value to the trip removal acknowledged array.',

  SetSelectedTripStartDate = '[Trip] Set selected trip start date.',
  SetSelectedTripEndDate = '[Trip] Set selected trip end date.',
}

export const setLastTripRemovalAcknowledgedFlagTrue = createAction(
  TripActionsEnum.SetLastTripRemovalAcknowledgedFlagTrue
);

export const setLastTripRemovalAcknowledgedFlagFalse = createAction(
  TripActionsEnum.SetLastTripRemovalAcknowledgedFlagFalse
);

export const setSelectedTripName = createAction(
  TripActionsEnum.SetSelectedTripName, props<{ name: string }>()
);

export const removeTrip = createAction(
  TripActionsEnum.RemoveTrip
);

export const addTrip = createAction(
  TripActionsEnum.AddTrip, props<{ trip: TripInterface }>()
);

export const requestTripRemoval = createAction(
  TripActionsEnum.RequestTripRemoval
);

export const setSelectedTripIndex = createAction(
  TripActionsEnum.SetSelectedTripIndex, props<{ index: number }>()
);

export const setSelectedTripStartDate = createAction(
  TripActionsEnum.SetSelectedTripStartDate, props<{ startDate: Date }>()
);

export const setSelectedTripEndDate = createAction(
  TripActionsEnum.SetSelectedTripEndDate, props<{ endDate: Date }>()
);
