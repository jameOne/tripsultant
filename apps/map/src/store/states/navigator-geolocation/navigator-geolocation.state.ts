import { NavigatorGeolocationInterface } from '~models/navigation-geolocation/navigation-geolocation.interface';

export interface NavigatorGeolocationStateInterface {
  geolocationHistory: NavigatorGeolocationInterface[];
  gpsFixed: boolean;
}

export const initialNavigatorGeolocationState: NavigatorGeolocationStateInterface = {
  geolocationHistory: [],
  gpsFixed: false
};
