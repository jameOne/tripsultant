export interface SideNavigationInterface {
  open: boolean;
}

export enum PanelSelectionEnum {
  DIRECTIONS,
  ROUTE_WAYPOINTS,
  CHAT,
}

export interface PanelSelectionInterface {
  panelSelection: PanelSelectionEnum;
}
