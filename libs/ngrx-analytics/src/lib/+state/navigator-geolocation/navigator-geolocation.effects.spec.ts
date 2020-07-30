import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { NavigatorGeolocationEffects } from './navigator-geolocation.effects';
import * as NavigatorGeolocationActions from './navigator-geolocation.actions';

describe('NavigatorGeolocationEffects', () => {
  let actions: Observable<any>;
  let effects: NavigatorGeolocationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        NavigatorGeolocationEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(NavigatorGeolocationEffects);
  });

  describe('loadNavigatorGeolocation$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: NavigatorGeolocationActions.loadNavigatorGeolocations(),
      });

      const expected = hot('-a-|', {
        a: NavigatorGeolocationActions.loadNavigatorGeolocationsSuccess({
          navigatorGeolocations: [],
        }),
      });

      expect(effects.loadNavigatorGeolocation$).toBeObservable(expected);
    });

    it('should throw error', () => {

      const loadError = new Error('error loading navigator geolocations')

      jest.spyOn(effects, 'loadNavigatorGeolocations').mockImplementation(() => {
        throw loadError
      });

      actions = hot('-a-|', { a: NavigatorGeolocationActions.loadNavigatorGeolocations() });

      const expected = hot('-a-|', {
        a: NavigatorGeolocationActions.loadNavigatorGeolocationsFailure({ error: loadError }),
      });

      expect(effects.loadNavigatorGeolocation$).toBeObservable(expected);
    });
  });
});
