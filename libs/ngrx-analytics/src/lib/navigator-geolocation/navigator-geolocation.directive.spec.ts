import { NavigatorGeolocationDirective } from './navigator-geolocation.directive';
import {
  initialNavigatorGeolocationState,
} from '@tripsultant/ngrx-analytics';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { async, TestBed } from '@angular/core/testing';
import { NavigatorGeolocationsActionsEnum } from '@tripsultant/ngrx-analytics';

describe('NavigatorGeolocationDirective', () => {
  const initialState = initialNavigatorGeolocationState;
  let mockStore: MockStore;
  let directive: NavigatorGeolocationDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    directive = new NavigatorGeolocationDirective(mockStore);

  }));

  it('should have a navigatorGeolocation', async(() => {
    expect(directive.navigatorGeolocation).toBeUndefined();
  }));

  it('dispatch null position on init', async(() => {
    Object.defineProperty(directive, 'navigatorGeolocation', {
      writable: true,
      value: {
        clearWatch: jest.fn(),
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      },
    });
    directive.ngOnInit();
    expect(directive.navigatorGeolocation.watchPosition).toHaveBeenCalledTimes(1);
    mockStore.scannedActions$.subscribe((action) => {
      expect(action.type).toEqual(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocations);
    });
  }));

  it('dispatch null position on via success call back', async(() => {
    Object.defineProperty(directive, 'navigatorGeolocation', {
      writable: true,
      value: {
        clearWatch: jest.fn(),
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn().mockImplementation((success) => Promise.resolve(success(
          {
            coords: {
              accuracy: null,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              latitude: null,
              longitude: null,
              speed: null
            },
            timestamp: 0
          }
        ))),
      },
    });
    directive.ngOnInit();
    expect(directive.navigatorGeolocation.watchPosition).toHaveBeenCalledTimes(1);
    mockStore.scannedActions$.subscribe((action) => {
      expect(action.type).toEqual(NavigatorGeolocationsActionsEnum.AddNavigatorGeolocation);
    });
  }));

});
