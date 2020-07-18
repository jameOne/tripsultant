import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SideNavigationComponent } from './side-navigation.component';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationContentStubComponent } from '~app/side-navigation-content/side-navigation-content.stub.component';
import { SideNavigationSearchBarStubComponent } from '~app/side-navigation-search-bar/side-navigation-search-bar.stub.component';
import { WaypointDirectionsStubComponent } from '~app/waypoint-directions/waypoint-directions.stub.component';
import { WaypointDragAndDropStubComponent } from '~app/waypoint-drag-and-drop/waypoint-drag-and-drop.stub.component';
import { TripsultantChatStubComponent } from '~app/tripsultant-chat/tripsultant-chat.stub.component';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [
        SideNavigationComponent,
        SideNavigationContentStubComponent,
        SideNavigationSearchBarStubComponent,
        WaypointDirectionsStubComponent,
        WaypointDragAndDropStubComponent,
        TripsultantChatStubComponent
      ],
      imports: [
        NgMaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
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
