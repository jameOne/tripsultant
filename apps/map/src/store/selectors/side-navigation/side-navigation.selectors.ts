import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '~store/states/app/app.state';
import { SideNavigationStateInterface } from '~store/states/side-navigation/side-navigation.state';

const sideNavigation = (state: AppStateInterface) => state.sidenav;

export const selectSideNavigation = createSelector(
  sideNavigation,
  (state: SideNavigationStateInterface) => state.sidenavOpen
);

export const selectPanelSelection = createSelector(
  sideNavigation,
  (state: SideNavigationStateInterface) => state.panelSelection
);
