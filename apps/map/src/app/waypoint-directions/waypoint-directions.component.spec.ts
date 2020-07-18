import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointDirectionsComponent } from './waypoint-directions.component';
import { NgMaterialModule } from '~app/ng-material/ng-material.module';
import { TransitDirectionsInformationStubComponent } from '~app/transit-directions-information/transit-directions-information.stub.component';
import { NoSanitizePipe } from '~app/no-sanitize.pipe';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('WaypointDirectionsComponent', () => {
  let component: WaypointDirectionsComponent;
  let fixture: ComponentFixture<WaypointDirectionsComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WaypointDirectionsComponent,
        TransitDirectionsInformationStubComponent,
        NoSanitizePipe
      ],
      imports: [
        NgMaterialModule
      ],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
