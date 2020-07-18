import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SideNavigationContentComponent } from './side-navigation-content.component';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '~leaflet/leaflet.module';
import { MapViewStubComponent } from '~app/map-view/map-view.stub.component';
import { FooterStubComponent } from '~app/footer/footer.stub.component';
import { SideNavigationToggleStubComponent } from '~app/side-navigation-toggle/side-navigation-toggle.stub.component';
import { AddTripButtonStubComponent } from '~app/add-trip-button/add-trip-button.stub.component';

describe('SideNavigationContentComponent', () => {
  let component: SideNavigationContentComponent;
  let fixture: ComponentFixture<SideNavigationContentComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [
        SideNavigationContentComponent,
        MapViewStubComponent,
        FooterStubComponent,
        SideNavigationToggleStubComponent,
        AddTripButtonStubComponent,
      ],
      imports: [NgMaterialModule, BrowserAnimationsModule, LeafletModule]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationContentComponent);
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
