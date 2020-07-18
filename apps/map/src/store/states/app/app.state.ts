import { RouterReducerState } from '@ngrx/router-store';

import {
  SideNavigationStateInterface,
  initialSideNavigationState
} from '../side-navigation/side-navigation.state';
import {
  TripStateInterface,
  initialTripState
} from '../side-navigation-content/trip.state';
import {
  initialWaypointState,
  WaypointsStateInterface
} from '../side-navigation-content/waypoints.state';
import {
  initialMapViewState,
  MapViewStateInterface
} from '../map-view/map-view.state';
import {
  initialTripNameDialogState,
  TripNameDialogOpenStateInterface
} from '../add-trip-dialog/add-trip-dialog.state';
import {
  initialWaypointLocationDialogState,
  WaypointLocationDialogStateInterface
} from '../add-waypoint-dialog/add-trip-dialog.state';
import {
  DirectionsStateInterface,
  initialDirectionsState
} from '../directions/directions.state';
import {
  initialMediaQueryState,
  MediaQueryStateInterface
} from '../../states/media-query/media-query.state';
import {
  initialNavigatorGeolocationState,
  NavigatorGeolocationStateInterface
} from '../../states/navigator-geolocation/navigator-geolocation.state';


export interface AppStateInterface {
  trips: TripStateInterface;
  tripNameDialog: TripNameDialogOpenStateInterface;
  mapViews: MapViewStateInterface;
  sidenav: SideNavigationStateInterface;
  waypoints: WaypointsStateInterface;
  waypointLocationDialog: WaypointLocationDialogStateInterface;
  directions: DirectionsStateInterface;
  mediaQuery: MediaQueryStateInterface;
  navigatorGeolocation: NavigatorGeolocationStateInterface;
  router?: RouterReducerState;
}

export const initialAppState: AppStateInterface = {
  trips: initialTripState,
  tripNameDialog: initialTripNameDialogState,
  mapViews: initialMapViewState,
  sidenav: initialSideNavigationState,
  waypoints: initialWaypointState,
  waypointLocationDialog: initialWaypointLocationDialogState,
  directions: initialDirectionsState,
  mediaQuery: initialMediaQueryState,
  navigatorGeolocation: initialNavigatorGeolocationState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
