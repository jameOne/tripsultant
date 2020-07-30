import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromNavigatorGeolocation from './navigator-geolocation.reducer';
import * as NavigatorGeolocationActions from './navigator-geolocation.actions';
import { NavigatorGeolocationEntity } from './navigator-geolocation.models';

@Injectable()
export class NavigatorGeolocationEffects {
  loadNavigatorGeolocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NavigatorGeolocationActions.loadNavigatorGeolocations),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here.
          // For now just return a success action...
          const navigatorGeolocations = this.loadNavigatorGeolocations();
          return NavigatorGeolocationActions
            .loadNavigatorGeolocationsSuccess({ navigatorGeolocations });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return NavigatorGeolocationActions
            .loadNavigatorGeolocationsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}

  loadNavigatorGeolocations(): NavigatorGeolocationEntity[] {
    return [];
  }
}
