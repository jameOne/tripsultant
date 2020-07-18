import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDirectionsInformationComponent } from './transit-directions-information.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('TransitDirectionsInformationComponent', () => {
  let component: TransitDirectionsInformationComponent;
  let fixture: ComponentFixture<TransitDirectionsInformationComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransitDirectionsInformationComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitDirectionsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
