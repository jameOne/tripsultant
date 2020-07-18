import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationSearchBarComponent } from './side-navigation-search-bar.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddWaypointButtonStubComponent } from '~app/add-waypoint-button/add-waypoint-button.stub.component';
import { WaypointDragAndDropStubComponent } from '~app/waypoint-drag-and-drop/waypoint-drag-and-drop.stub.component';
import { AddTripButtonStubComponent } from '~app/add-trip-button/add-trip-button.stub.component';
import { RemoveTripButtonStubComponent } from '~app/remove-trip-button/remove-trip-button.stub.component';
import { TripDateRangePickerStubComponent } from '~app/trip-date-range-picker/trip-date-range-picker.stub.component';

describe('SideNavigationSearchBarComponent', () => {
  let component: SideNavigationSearchBarComponent;
  let fixture: ComponentFixture<SideNavigationSearchBarComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideNavigationSearchBarComponent,
        AddWaypointButtonStubComponent,
        WaypointDragAndDropStubComponent,
        AddTripButtonStubComponent,
        RemoveTripButtonStubComponent,
        TripDateRangePickerStubComponent,
      ],
      imports: [NgMaterialModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
