import { IAtlasesEntity } from './atlases.models';
import * as AtlasesActions from './atlases.actions';
import { IAtlasesState, initialAtlasesState, ATLASES_REDUCER } from './atlases.reducer';
import { Action } from '@ngrx/store';

describe('Atlases Reducer', () => {
  // load initial queries
  let action: Action;
  let result: IAtlasesState;

  const createAtlasesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IAtlasesEntity);

  beforeEach(() => {});

  describe('valid Atlases actions', () => {
    it('loadAtlasesSuccess should return set the list of known Atlases', () => {
      const atlases = [
        createAtlasesEntity('ATLAS-AAA'),
        createAtlasesEntity('ATLAS-zzz'),
      ];
      action = AtlasesActions.loadAtlasesSuccess({ atlases });

      result = ATLASES_REDUCER(initialAtlasesState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      action = {} as any;

      result = ATLASES_REDUCER(initialAtlasesState, action);

      expect(result).toBe(initialAtlasesState);
    });
  });


  describe('selectAtlas()', () => {
    it('should select ids ', () => {
      action = AtlasesActions.selectAtlas({ id: 'Test-0' });
      result = ATLASES_REDUCER(result, action)

      expect(result.selectedId).toBe('Test-0');
    });

    it('should have undefined selected id', () => {
      action = AtlasesActions.selectAtlas({ id: 'Test-100' });
      result = ATLASES_REDUCER(result, action)

      expect(result.selectedId).toBeUndefined();
    });
  });

  describe('addAtlas()', () => {
    it('should add media name', () => {
      action = AtlasesActions.addAtlas({
        atlas: {
          id: 'Test-2',
          name: 'nullAtlas'
        }
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
    });
  });

  describe('setAtlas()', () => {
    it('should set a single media name', () => {
      action = AtlasesActions.setAtlas({
        atlas: {
          id: 'Test-2',
          name: 'screenWidth'
        }
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-2'].name).toBe('screenWidth');
    });
  });

  describe('upsertAtlas()', () => {
    it('should update a media name if it exists', () => {
      action = AtlasesActions.upsertAtlas({
        atlas: {
          id: 'Test-1',
          name: 'screenWidth'
        }
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-1'].name).toBe('screenWidth');
    });

    it('should add media name if it does not exist', () => {
      action = AtlasesActions.upsertAtlas({
        atlas: {
          id: 'Test-4',
          name: 'screenWidth'
        }
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-4'].name).toBe('screenWidth');
    });
  });

  describe('addAtlases()', () => {
    it('should add many maps', () => {
      action = AtlasesActions.addAtlases({
        atlases: [
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
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(4);
      expect(result.entities['Test-99'].name).toBe('screenWidth');
      expect(result.entities['Test-100'].name).toBe('screenWidth');
    });
  });

  describe('upsertAtlases()', () => {
    it('should upsert many maps', () => {
      action = AtlasesActions.upsertAtlases({
        atlases: [
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
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
      expect(result.entities['Test-100'].name).toBe('screenWidth');
    });
  });

  describe('updateAtlas()', () => {
    it('should update a single media name if it exists', () => {
      action = AtlasesActions.updateAtlas({
        update: {
          id: 'Test-0',
          changes: {
            name: 'screenWidth'
          }
        },
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
    });

    it('should not update a single media if it does not exist', () => {
      action = AtlasesActions.updateAtlas({
        update: {
          id: 'Test-100',
          changes: {
            name: 'screenWidth'
          }
        },
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('updateAtlases()', () => {
    it('should update many maps', () => {
      action = AtlasesActions.updateAtlases({
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
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].name).toBe('screenWidth');
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('mapAtlases()', () => {
    it('should map many maps', () => {
      action = AtlasesActions.mapAtlases({
        entityMap: (entity) => ({ ...entity, id: 'Test-' + entity.id.toString() })
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
      expect(result.entities['Test-Test-0'].name).toBe('name-Test-0');
      expect(result.entities['Test-Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('deleteAtlas()', () => {
    it('should delete a media single media name', () => {
      action = AtlasesActions.deleteAtlas({
        id: 'Test-0',
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });

    it('should retain state if id does not exist', () => {
      const initialResult = result;
      action = AtlasesActions.deleteAtlas({
        id: 'Test-100',
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result).toBe(initialResult);
    });
  });

  describe('deleteAtlases()', () => {
    it('should delete many maps', () => {
      action = AtlasesActions.deleteAtlases({
        ids: ['Test-0', 'Test-100'],
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('deleteAtlasesByPredicate()', () => {
    it('should delete many maps by given predicate', () => {
      action = AtlasesActions.deleteAtlasesByPredicate({
        predicate: entity => entity.id === 'Test-0',
      });
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].name).toBe('name-Test-1');
    });
  });

  describe('clearAtlases()', () => {
    it('should clear many maps', () => {
      action = AtlasesActions.clearAtlases();
      result = ATLASES_REDUCER(result, action);
      expect(result.ids.length).toBe(0);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
    });
  });
});
