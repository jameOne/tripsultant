import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AtlasesActions from './atlases.actions';
import { IAtlasesEntity } from './atlases.models';

@Injectable()
export class AtlasesEffects {
  loadAtlases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtlasesActions.loadAtlases),
      fetch({
        run: (_) => {
          // Your custom service 'load' logic goes here.
          // For now just return a success action...
          const atlases = this.loadAtlases();
          return AtlasesActions.loadAtlasesSuccess({ atlases });
        },

        onError: (_, error) => {
          console.error('Error', error);
          return AtlasesActions.loadAtlasesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}

  loadAtlases(): IAtlasesEntity[] {
    return [];
  }
}
