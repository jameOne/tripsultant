import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { IMapsEntity } from './maps.models';
import { MapsEffects } from './maps.effects';
import { MapsFacade } from './maps.facade';

import * as MapsActions from './maps.actions';
import { MAPS_FEATURE_KEY, MapsState, MAPS_REDUCER } from './maps.reducer';

interface TestSchema {
  maps: MapsState;
}

describe('MapsFacade', () => {
  let facade: MapsFacade;
  let store: Store<TestSchema>;
  const createIMapsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IMapsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MAPS_FEATURE_KEY, MAPS_REDUCER),
          EffectsModule.forFeature([MapsEffects]),
        ],
        providers: [MapsFacade],
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
      facade = TestBed.inject(MapsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allMaps$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(MapsActions.loadMaps());

        list = await readFirst(facade.allMaps$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadMapsSuccess` to manually update list
     */
    it('allMaps$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allMaps$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          MapsActions.loadMapsSuccess({
            maps: [createIMapsEntity('AAA'), createIMapsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allMaps$);
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
