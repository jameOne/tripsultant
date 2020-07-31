import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { NavigatorGeolocationEntity, nullPosition } from './navigator-geolocation.models';
import { NavigatorGeolocationEffects } from './navigator-geolocation.effects';
import { NavigatorGeolocationFacade } from './navigator-geolocation.facade';

import * as NavigatorGeolocationSelectors from './navigator-geolocation.selectors';
import * as NavigatorGeolocationActions from './navigator-geolocation.actions';
import {
  NAVIGATORGEOLOCATION_FEATURE_KEY,
  NavigatorGeolocationState,
  initialNavigatorGeolocationState,
  NAVIGATORGEOLOCATION_REDUCER,
} from './navigator-geolocation.reducer';

interface TestSchema {
  navigatorGeolocation: NavigatorGeolocationState;
}

describe('NavigatorGeolocationFacade', () => {
  let facade: NavigatorGeolocationFacade;
  let store: Store<TestSchema>;
  const createNavigatorGeolocationEntity = (id: string, position = nullPosition) =>
    ({
      id,
      position,
    } as NavigatorGeolocationEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(NAVIGATORGEOLOCATION_FEATURE_KEY, NAVIGATORGEOLOCATION_REDUCER),
          EffectsModule.forFeature([NavigatorGeolocationEffects]),
        ],
        providers: [NavigatorGeolocationFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(NavigatorGeolocationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allNavigatorGeolocation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(NavigatorGeolocationActions.loadNavigatorGeolocations());

        list = await readFirst(facade.allNavigatorGeolocation$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadNavigatorGeolocationSuccess` to manually update list
     */
    it('allNavigatorGeolocation$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allNavigatorGeolocation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          NavigatorGeolocationActions.loadNavigatorGeolocationsSuccess({
            navigatorGeolocations: [
              createNavigatorGeolocationEntity('Test-0'),
              createNavigatorGeolocationEntity('Test-1'),
            ],
          })
        );

        list = await readFirst(facade.allNavigatorGeolocation$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
