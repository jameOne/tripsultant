import { createAction, props } from '@ngrx/store';
import { NavigatorGeolocationInterface } from '~models/navigation-geolocation/navigation-geolocation.interface';

export enum NavigatorGeolocationActionsEnum {
  AppendPositionToGeolocationHistory = '[Navigator Geolocation] Append position entry to navigator geolocation history.',

  AppendDefaultGPSFixedBoolean = '[Navigator Geolocation] Append default GPS fixed boolean to gps fixed array.',
  ToggleGPSFixedBoolean = '[Navigator Geolocation] Toggle GPS fixed boolean by index.',
  RemoveGPSFixedBoolean = '[Navigator Geolocation] Remove boolean value from GPS fixed array.',
}

export const appendPositionToGeolocationHistory = createAction(
  NavigatorGeolocationActionsEnum.AppendPositionToGeolocationHistory,
  props<{ position: NavigatorGeolocationInterface }>()
);

export const toggleGPSFixedBoolean = createAction(
  NavigatorGeolocationActionsEnum.ToggleGPSFixedBoolean
);

export const removeGPSFixedBoolean = createAction(
  NavigatorGeolocationActionsEnum.RemoveGPSFixedBoolean,
  props<{ index: number }>()
);

export const appendDefaultGPSFixedBoolean = createAction(
  NavigatorGeolocationActionsEnum.AppendDefaultGPSFixedBoolean
);
