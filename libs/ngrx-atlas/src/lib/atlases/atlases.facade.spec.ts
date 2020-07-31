import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { IAtlasesEntity } from './atlases.models';
import { AtlasesEffects } from './atlases.effects';
import { AtlasesFacade } from './atlases.facade';

import * as AtlasesActions from './atlases.actions';
import {
  ATLASES_FEATURE_KEY,
  IAtlasesState,
  ATLASES_REDUCER,
} from './atlases.reducer';

interface TestSchema {
  atlases: IAtlasesState;
}

describe('AtlasesFacade', () => {
  let facade: AtlasesFacade;
  let store: Store<TestSchema>;
  const createAtlasesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IAtlasesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ATLASES_FEATURE_KEY, ATLASES_REDUCER),
          EffectsModule.forFeature([AtlasesEffects]),
        ],
        providers: [AtlasesFacade],
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
      facade = TestBed.inject(AtlasesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allAtlases$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(AtlasesActions.loadAtlases());

        list = await readFirst(facade.allAtlases$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadAtlasesSuccess` to manually update list
     */
    it('allAtlases$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allAtlases$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          AtlasesActions.loadAtlasesSuccess({
            atlases: [createAtlasesEntity('AAA'), createAtlasesEntity('BBB')],
          })
        );

        list = await readFirst(facade.allAtlases$);
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
