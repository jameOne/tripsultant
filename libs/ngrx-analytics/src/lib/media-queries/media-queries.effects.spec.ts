import { TestBed, async } from '@angular/core/testing';

import { Observable, throwError } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MediaQueriesEffects } from './media-queries.effects';
import * as MediaQueriesActions from './media-queries.actions';

describe('MediaQueriesEffects', () => {
  let actions: Observable<any>;
  let effects: MediaQueriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MediaQueriesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MediaQueriesEffects);
  });

  describe('loadMediaQueries$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MediaQueriesActions.loadMediaQueries() });

      const expected = hot('-a-|', {
        a: MediaQueriesActions.loadMediaQueriesSuccess({ mediaQueries: [] }),
      });

      expect(effects.loadMediaQueries$).toBeObservable(expected);
    });

    it('should throw error', () => {

      const loadError = new Error('error loading media queries')

      jest.spyOn(effects, 'loadMediaQueries').mockImplementation(() => {
        throw loadError
      });

      actions = hot('-a-|', { a: MediaQueriesActions.loadMediaQueries() });

      const expected = hot('-a-|', {
        a: MediaQueriesActions.loadMediaQueriesFailure({ error: loadError }),
      });

      expect(effects.loadMediaQueries$).toBeObservable(expected);
    });
  });
});
