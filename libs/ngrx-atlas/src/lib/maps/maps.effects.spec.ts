import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MapsEffects } from './maps.effects';
import * as MapsActions from './maps.actions';


describe('MapsEffects', () => {
  let actions: Observable<any>;
  let effects: MapsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MapsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MapsEffects);
  });

  describe('loadMaps$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MapsActions.loadMaps() });

      const expected = hot('-a-|', {
        a: MapsActions.loadMapsSuccess({ maps: [] }),
      });

      expect(effects.loadMaps$).toBeObservable(expected);
    });

    it('should throw error', () => {

      const loadError = new Error('error loading maps')

      jest.spyOn(effects, 'loadMaps').mockImplementation(() => {
        throw loadError
      });

      actions = hot('-a-|', { a: MapsActions.loadMaps() });

      const expected = hot('-a-|', {
        a: MapsActions.loadMapsFailure({ error: loadError }),
      });

      expect(effects.loadMaps$).toBeObservable(expected);
    });
  });
});
