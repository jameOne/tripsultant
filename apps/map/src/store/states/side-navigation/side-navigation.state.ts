import {
  PanelSelectionEnum
} from '~models/side-navigation/side-navigation.interface';

export interface SideNavigationStateInterface {
  sidenavOpen: boolean;
  panelSelection: PanelSelectionEnum;
}

export const initialSideNavigationState: SideNavigationStateInterface = {
  sidenavOpen: false,
  panelSelection: 0
};
