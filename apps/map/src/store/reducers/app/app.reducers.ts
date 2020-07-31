import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppStateInterface } from '../../states/app/app.state';
import { tripReducer } from '../side-navigation-content/trip.reducers';
import { sideNavigationReducer } from '../side-navigation/side-navigation.reducers';
import { mapViewReducer } from '../map-view/map-view.reducer';
import { waypointsReducer } from '../side-navigation-content/waypoint.reducers';
import { tripNameDialogReducer } from '../add-trip-dialog/add-trip-dialog.reducers';
import { waypointLocationDialogReducer } from '../add-waypoint-dialog/add-waypoint-dialog.reducers';
import { directionsReducer } from '../directions/directions.reducer';

export const appReducers: ActionReducerMap<AppStateInterface, any> = {
  router: routerReducer,
  trips: tripReducer,
  mapViews: mapViewReducer,
  tripNameDialog: tripNameDialogReducer,
  waypointLocationDialog: waypointLocationDialogReducer,
  waypoints: waypointsReducer,
  directions: directionsReducer,
  sidenav: sideNavigationReducer
};
