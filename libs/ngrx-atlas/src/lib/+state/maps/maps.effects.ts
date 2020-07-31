import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as MapsActions from './maps.actions';
import { MapsEntity } from '@tripsultant/ngrx-atlas';

@Injectable()
export class MapsEffects {
  loadMaps$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MapsActions.loadMaps),
      fetch({
        run: (_) => {
          // Your custom service 'load' logic goes here.
          // For now just return a success action...
          const maps = this.loadMaps();
          return MapsActions.loadMapsSuccess({ maps });
        },

        onError: (_, error) => {
          console.error('Error', error);
          return MapsActions.loadMapsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}

  loadMaps(): MapsEntity[] {
    return [];
  }
}
