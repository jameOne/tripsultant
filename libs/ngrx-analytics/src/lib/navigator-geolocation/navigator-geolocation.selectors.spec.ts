import { NavigatorGeolocationEntity, nullPosition } from './navigator-geolocation.models';
import {
  NavigatorGeolocationState,
  navigatorGeolocationAdapter,
  initialNavigatorGeolocationState,
} from './navigator-geolocation.reducer';
import * as NavigatorGeolocationSelectors from './navigator-geolocation.selectors';

describe('NavigatorGeolocation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNavigatorGeolocationId = (it: NavigatorGeolocationEntity) => it['id'];
  const createNavigatorGeolocationEntity = (id: string, position = nullPosition) =>
    ({
      id,
      position,
    } as NavigatorGeolocationEntity);

  let state;

  beforeEach(() => {
    state = {
      navigatorGeolocation: navigatorGeolocationAdapter.setAll(
        [
          createNavigatorGeolocationEntity('Test-0'),
          createNavigatorGeolocationEntity('Test-1'),
          createNavigatorGeolocationEntity('Test-2'),
        ],
        {
          ...initialNavigatorGeolocationState,
          selectedId: 'Test-1',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('NavigatorGeolocation Selectors', () => {
    it('getAllNavigatorGeolocation() should return the list of NavigatorGeolocation', () => {
      const results = NavigatorGeolocationSelectors.getAllNavigatorGeolocation(
        state
      );
      const selId = getNavigatorGeolocationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('Test-1');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NavigatorGeolocationSelectors.getSelectedNavigatorGeolocation(state);
      const selId = getNavigatorGeolocationId(result);

      expect(selId).toBe('Test-1');
    });

    it("getNavigatorGeolocationLoaded() should return the current 'loaded' status", () => {
      const result = NavigatorGeolocationSelectors.getNavigatorGeolocationLoaded(
        state
      );

      expect(result).toBe(true);
    });

    it("getNavigatorGeolocationError() should return the current 'error' state", () => {
      const result = NavigatorGeolocationSelectors.getNavigatorGeolocationError(
        state
      );

      expect(result).toBe(ERROR_MSG);
    });
  });
});
