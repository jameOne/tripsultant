import { IAtlasesEntity } from './atlases.models';
import { atlasesAdapter, initialAtlasesState } from './atlases.reducer';
import * as AtlasesSelectors from './atlases.selectors';

describe('Atlases Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAtlasesId = (it) => it['id'];
  const createAtlasesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IAtlasesEntity);

  let state;

  beforeEach(() => {
    state = {
      atlases: atlasesAdapter.setAll(
        [
          createAtlasesEntity('ATLAS-AAA'),
          createAtlasesEntity('ATLAS-BBB'),
          createAtlasesEntity('ATLAS-CCC'),
        ],
        {
          ...initialAtlasesState,
          selectedId: 'ATLAS-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Atlases Selectors', () => {
    it('getAllAtlases() should return the list of Atlases', () => {
      const results = AtlasesSelectors.getAllAtlases(state);
      const selId = getAtlasesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('ATLAS-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AtlasesSelectors.getSelectedAtlas(state);
      const selId = getAtlasesId(result);

      expect(selId).toBe('ATLAS-BBB');
    });

    it("getAtlasesLoaded() should return the current 'loaded' status", () => {
      const result = AtlasesSelectors.getAtlasesLoaded(state);

      expect(result).toBe(true);
    });

    it("getAtlasesError() should return the current 'error' state", () => {
      const result = AtlasesSelectors.getAtlasesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
