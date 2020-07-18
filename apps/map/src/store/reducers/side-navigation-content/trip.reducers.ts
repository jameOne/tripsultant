import {
  initialTripState,
  TripStateInterface
} from '~store/states/side-navigation-content/trip.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addTrip,
  removeTrip,
  setSelectedTripIndex,
  setSelectedTripName,
  setLastTripRemovalAcknowledgedFlagFalse,
  setLastTripRemovalAcknowledgedFlagTrue,
  setSelectedTripStartDate,
  setSelectedTripEndDate
} from '~store/actions/side-navigation-content/trip.actions';

const reducer = createReducer(
  initialTripState,
  on(setSelectedTripName, (state, { name }) => ({
    ...state,
    trips: [
      ...state.trips.slice(0, state.selectedTripIndex),
      { ...state.trips[state.selectedTripIndex], name },
      ...state.trips.slice(state.selectedTripIndex + 1)
    ]
  })),
  on(setSelectedTripStartDate, (state, { startDate }) => ({
    ...state,
    trips: [
      ...state.trips.slice(0, state.selectedTripIndex),
      { ...state.trips[state.selectedTripIndex], startDate },
      ...state.trips.slice(state.selectedTripIndex + 1)
    ]
  })),
  on(setSelectedTripEndDate, (state, { endDate }) => ({
    ...state,
    trips: [
      ...state.trips.slice(0, state.selectedTripIndex),
      { ...state.trips[state.selectedTripIndex], endDate },
      ...state.trips.slice(state.selectedTripIndex + 1)
    ]
  })),
  on(addTrip, (state, { trip }) => ({
    ...state,
    trips: [...state.trips, trip]
  })),
  on(setLastTripRemovalAcknowledgedFlagTrue, (state) => ({
    ...state,
    tripRemovalRequestAcknowledged: true
  })),
  on(setLastTripRemovalAcknowledgedFlagFalse, (state) => ({
    ...state,
    tripRemovalRequestAcknowledged: false
  })),
  on(removeTrip, (state) => ({
    ...state,
    trips: [
      ...state.trips.slice(0, state.selectedTripIndex),
      ...state.trips.slice(state.selectedTripIndex + 1)
    ]
  })),
  on(setSelectedTripIndex, (state, { index }) => ({
    ...state,
    selectedTripIndex: index
  }))
);

export function tripReducer(state: TripStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
