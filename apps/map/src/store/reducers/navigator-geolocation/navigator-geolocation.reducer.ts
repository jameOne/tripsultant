import { Action, createReducer, on } from '@ngrx/store';
import {
  initialNavigatorGeolocationState,
  NavigatorGeolocationStateInterface
} from '~store/states/navigator-geolocation/navigator-geolocation.state';
import {
  appendPositionToGeolocationHistory,
  toggleGPSFixedBoolean
} from '~store/actions/navigator-geolocation/navigator-geolocation.actions';

const reducer = createReducer(
  initialNavigatorGeolocationState,
  on(appendPositionToGeolocationHistory, (state, { position }) => ({
    ...state,
    geolocationHistory: [...state.geolocationHistory, position]
  })),
  on(toggleGPSFixedBoolean, (state) => ({
    ...state,
    gpsFixed: !state.gpsFixed
  }))
);

export function navigatorGeolocationReducer(state: NavigatorGeolocationStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
