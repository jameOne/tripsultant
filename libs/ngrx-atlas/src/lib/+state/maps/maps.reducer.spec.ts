import { MapsEntity } from './maps.models';
import * as MapsActions from './maps.actions';
import { MapsState, initialMapsState, MAPS_REDUCER } from './maps.reducer';
import { Action } from '@ngrx/store';
import { async } from '@angular/core/testing';

describe('Maps Reducer', () => {
  // load initial queries
  let action: Action;
  let result: MapsState;

  const createMapsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MapsEntity);

  beforeEach(async(() => {
    const maps = [
      createMapsEntity('Test-0'),
      createMapsEntity('Test-1'),
    ];
    // load initial entities
    action = MapsActions.loadMapsSuccess({ maps });

    result = MAPS_REDUCER(initialMapsState, action);
  }));

  describe('valid Maps actions', () => {
    it('loadMapsSuccess should return set the list of known Maps', () => {
      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      action = {} as any;

      result = MAPS_REDUCER(initialMapsState, action);

      expect(result).toBe(initialMapsState);
    });
  });

  describe('error loading maps', () => {
    it('should return stat with error', () => {
      const loadError = new Error('error loading maps')
      action = MapsActions.loadMapsFailure({
        error: loadError,
      });
      result = MAPS_REDUCER(initialMapsState, action);

      expect(result.error).toBe(loadError);
    });
  });

  describe('selectMap()', () => {
    it('should select ids ', () => {
      action = MapsActions.selectMap({ id: 'Test-0' });
      result = MAPS_REDUCER(result, action)

      expect(result.selectedId).toBe('Test-0');
    });

    it('should have undefined selected id', () => {
      action = MapsActions.selectMap({ id: 'Test-100' });
      result = MAPS_REDUCER(result, action)

      expect(result.selectedId).toBeUndefined();
    });
  });

  describe('addMap()', () => {
    it('should add media name', () => {
      action = MapsActions.addMap({
        map: {
          id: 'Test-2',
          name: 'nullMap'
        }
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
    });
  });

  describe('setMap()', () => {
    it('should set a single media name', () => {
      action = MapsActions.setMap({
        map: {
          id: 'Test-2',
          name: 'screenWidth'
        }
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-2'].name).toBe('screenWidth');
    });
  });

  describe('upsertMap()', () => {
    it('should update a media name if it exists', () => {
      action = MapsActions.upsertMap({
        map: {
          id: 'Test-1',
          name: 'screenWidth'
        }
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-1'].name).toBe('screenWidth');
    });

    it('should add media name if it does not exist', () => {
      action = MapsActions.upsertMap({
        map: {
          id: 'Test-4',
          name: 'screenWidth'
        }
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-4'].name).toBe('screenWidth');
    });
  });

  describe('addMaps()', () => {
    it('should add many maps', () => {
      action = MapsActions.addMaps({
        maps: [
          {
            id: 'Test-99',
            name: 'screenWidth'
          },
          {
            id: 'Test-100',
            name: 'screenWidth'
          }
        ]
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(4);
      expect(result.entities['Test-99'].name).toBe('screenWidth');
      expect(result.entities['Test-100'].name).toBe('screenWidth');
    });
  });

  describe('upsertMaps()', () => {
    it('should upsert many maps', () => {
      action = MapsActions.upsertMaps({
        maps: [
          {
            id: 'Test-0',
            name: 'screenWidth'
          },
          {
            id: 'Test-100',
            name: 'screenWidth'
          }
        ]
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
      expect(result.entities['Test-100'].name).toBe('screenWidth');
    });
  });

  describe('updateMap()', () => {
    it('should update a single media name if it exists', () => {
      action = MapsActions.updateMap({
        update: {
          id: 'Test-0',
          changes: {
            name: 'screenWidth'
          }
        },
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
    });

    it('should not update a single media if it does not exist', () => {
      action = MapsActions.updateMap({
        update: {
          id: 'Test-100',
          changes: {
            name: 'screenWidth'
          }
        },
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('updateMaps()', () => {
    it('should update many maps', () => {
      action = MapsActions.updateMaps({
        updates: [
          {
            id: 'Test-0',
            changes: {
              name: 'screenWidth'
            }
          },
          {
            id: 'Test-100',
            changes: {
              name: 'screenWidth'
            }
          },
        ]
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('mapMaps()', () => {
    it('should map many maps', () => {
      action = MapsActions.mapMaps({
        entityMap: (entity) => ({ ...entity, id: 'Test-' + entity.id.toString() })
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
      expect(result.entities['Test-Test-0'].name).toBe('name-Test-0');
      expect(result.entities['Test-Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('deleteMap()', () => {
    it('should delete a media single media name', () => {
      action = MapsActions.deleteMap({
        id: 'Test-0',
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });

    it('should retain state if id does not exist', () => {
      const initialResult = result;
      action = MapsActions.deleteMap({
        id: 'Test-100',
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result).toBe(initialResult);
    });
  });

  describe('deleteMaps()', () => {
    it('should delete many maps', () => {
      action = MapsActions.deleteMaps({
        ids: ['Test-0', 'Test-100'],
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('deleteMapsByPredicate()', () => {
    it('should delete many maps by given predicate', () => {
      action = MapsActions.deleteMapsByPredicate({
        predicate: entity => entity.id === 'Test-0',
      });
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('clearMaps()', () => {
    it('should clear many maps', () => {
      action = MapsActions.clearMaps();
      result = MAPS_REDUCER(result, action);
      expect(result.ids.length).toBe(0);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
    });
  });
});
