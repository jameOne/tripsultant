import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AtlasesEffects } from './atlases.effects';
import * as AtlasesActions from './atlases.actions';

describe('AtlasesEffects', () => {
  let actions: Observable<any>;
  let effects: AtlasesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AtlasesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AtlasesEffects);
  });

  describe('loadAtlases$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AtlasesActions.loadAtlases() });

      const expected = hot('-a-|', {
        a: AtlasesActions.loadAtlasesSuccess({ atlases: [] }),
      });

      expect(effects.loadAtlases$).toBeObservable(expected);
    });

    it('should throw error', () => {

      const loadError = new Error('error loading maps')

      jest.spyOn(effects, 'loadAtlases').mockImplementation(() => {
        throw loadError
      });

      actions = hot('-a-|', { a: AtlasesActions.loadAtlases() });

      const expected = hot('-a-|', {
        a: AtlasesActions.loadAtlasesFailure({ error: loadError }),
      });

      expect(effects.loadAtlases$).toBeObservable(expected);
    });
  });
});
