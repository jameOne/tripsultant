import {
  openSideNavigation,
  closeSideNavigation, toggleSideNavigation, pushRouteWaypointButton, pushDirectionsButton, pushChatButton
} from '../../actions/side-navigation/side-navigation.actions';
import {
  initialSideNavigationState, SideNavigationStateInterface
} from '../../states/side-navigation/side-navigation.state';
import { Action, createReducer, on } from '@ngrx/store';
import { PanelSelectionEnum } from '~models/side-navigation/side-navigation.interface';

const reducer = createReducer(
  initialSideNavigationState,
  on(openSideNavigation, state => ({ ...state, sidenavOpen: true })),
  on(closeSideNavigation, state => ({ ...state, sidenavOpen: false })),
  on(toggleSideNavigation, state => ({ ...state, sidenavOpen: !state.sidenavOpen })),
  on(pushRouteWaypointButton, state => ({ ...state, panelSelection: PanelSelectionEnum.ROUTE_WAYPOINTS })),
  on(pushDirectionsButton, state => ({ ...state, panelSelection: PanelSelectionEnum.DIRECTIONS })),
  on(pushChatButton, state => ({ ...state, panelSelection: PanelSelectionEnum.CHAT }))
);

export function sideNavigationReducer(state: SideNavigationStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
