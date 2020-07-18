import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MapViewComponent } from './map-view.component';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { NgMaterialModule } from '~app/ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '~leaflet/leaflet.module';
import { SideNavigationToggleStubComponent } from '~app/side-navigation-toggle/side-navigation-toggle.stub.component';

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapViewComponent,
        SideNavigationToggleStubComponent
      ],
      providers: [provideMockStore({ initialState })],
      imports: [
        NgMaterialModule,
        BrowserAnimationsModule,
        LeafletModule
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewComponent);
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
