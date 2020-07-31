import { IMapsEntity } from './maps.models';
import { MapsState, mapsAdapter, initialMapsState } from './maps.reducer';
import * as MapsSelectors from './maps.selectors';

describe('Maps Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMapsId = (it) => it['id'];
  const createIMapsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IMapsEntity);

  let state;

  beforeEach(() => {
    state = {
      maps: mapsAdapter.setAll(
        [
          createIMapsEntity('MAP-AAA'),
          createIMapsEntity('MAP-BBB'),
          createIMapsEntity('MAP-CCC'),
        ],
        {
          ...initialMapsState,
          selectedId: 'MAP-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Maps Selectors', () => {
    it('getAllMaps() should return the list of Maps', () => {
      const results = MapsSelectors.getAllMaps(state);
      const selId = getMapsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('MAP-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MapsSelectors.getSelectedMap(state);
      const selId = getMapsId(result);

      expect(selId).toBe('MAP-BBB');
    });

    it("getMapsLoaded() should return the current 'loaded' status", () => {
      const result = MapsSelectors.getMapsLoaded(state);

      expect(result).toBe(true);
    });

    it("getMapsError() should return the current 'error' state", () => {
      const result = MapsSelectors.getMapsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
