import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromMediaQueries from './media-queries.reducer';
import * as MediaQueriesActions from './media-queries.actions';
import { MediaQueriesEntity } from './media-queries.models';

@Injectable()
export class MediaQueriesEffects {
  loadMediaQueries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaQueriesActions.loadMediaQueries),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here.
          // For now just return a success action...
          const mediaQueries = this.loadMediaQueries();
          return MediaQueriesActions
            .loadMediaQueriesSuccess({ mediaQueries });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return MediaQueriesActions
            .loadMediaQueriesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}

  loadMediaQueries(): MediaQueriesEntity[] {
    return [];
  }
}
