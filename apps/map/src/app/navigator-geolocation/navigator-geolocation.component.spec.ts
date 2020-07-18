import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorGeolocationComponent } from './navigator-geolocation.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('NavigatorGeolocationComponent', () => {
  let component: NavigatorGeolocationComponent;
  let fixture: ComponentFixture<NavigatorGeolocationComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatorGeolocationComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorGeolocationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
;
