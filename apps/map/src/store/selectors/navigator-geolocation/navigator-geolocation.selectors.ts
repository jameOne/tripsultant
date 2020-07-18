import { createSelector } from '@ngrx/store';
import { NavigatorGeolocationStateInterface } from '../../states/navigator-geolocation/navigator-geolocation.state';
import { AppStateInterface } from '../../states/app/app.state';

const navigatorGeolocationState = (state: AppStateInterface) => state.navigatorGeolocation;

export const selectLastNavigatorGeolocation = createSelector(
  navigatorGeolocationState,
  (state: NavigatorGeolocationStateInterface) => state.geolocationHistory[state.geolocationHistory.length - 1]
);

export const selectGPSFixed = createSelector(
  navigatorGeolocationState,
  (state: NavigatorGeolocationStateInterface) => state.gpsFixed
);
