import { createAction } from '@ngrx/store';

export enum SideNavigationActionsEnum {
  OpenSideNavigation = '[Side Navigation Component] Open',
  CloseSideNavigation = '[Side Navigation Component] Close',
  ToggleSideNavigation = '[Side Navigation Component] Toggle',
  PushRouteWaypointButton = '[Side Navigation Component] User selected route waypoints button.',
  PushDirectionsButton = '[Side Navigation Component] User selected directions button.',
  PushChatButton = '[Side Navigation Component] User selected chat button.',
}

export const closeSideNavigation = createAction(SideNavigationActionsEnum.CloseSideNavigation);
export const openSideNavigation = createAction(SideNavigationActionsEnum.OpenSideNavigation);
export const toggleSideNavigation = createAction(SideNavigationActionsEnum.ToggleSideNavigation);
export const pushRouteWaypointButton = createAction(SideNavigationActionsEnum.PushRouteWaypointButton);
export const pushDirectionsButton = createAction(SideNavigationActionsEnum.PushDirectionsButton);
export const pushChatButton = createAction(SideNavigationActionsEnum.PushChatButton);
