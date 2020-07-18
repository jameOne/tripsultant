import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '~store/states/app/app.state';
import { TripStateInterface } from '~store/states/side-navigation-content/trip.state';
import { WaypointsStateInterface } from '~store/states/side-navigation-content/waypoints.state';

const selectTrips = (state: AppStateInterface) => state.trips;
const selectWaypoints = (state: AppStateInterface) => state.waypoints;

export const selectTripList = createSelector(
  selectTrips,
  (state: TripStateInterface) => state.trips
);

export const selectSelectedTripIndex = createSelector(
  selectTrips,
  (state: TripStateInterface) => state.selectedTripIndex
);

export const selectTripRemovalRequests = createSelector(
  selectTrips,
  (state: TripStateInterface) => state.tripRemovalRequests
);

export const selectSelectedTrip = createSelector(
  selectTrips,
  (state: TripStateInterface) => state.trips[state.selectedTripIndex]
);

export const selectTripRemovalRequestAcknowledged = createSelector(
  selectTrips,
  (state: TripStateInterface) => state.tripRemovalRequestAcknowledged
);

export const selectTripWaypoints = createSelector(
  selectWaypoints,
  (state: WaypointsStateInterface) => state.waypoints
);

export const selectSelectedWaypointIndex = createSelector(
  selectWaypoints,
  (state: WaypointsStateInterface) => state.selectedTripWaypointIndex
);
