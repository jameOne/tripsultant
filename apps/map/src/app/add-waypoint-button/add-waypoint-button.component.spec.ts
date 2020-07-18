import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaypointButtonComponent } from './add-waypoint-button.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AddWaypointButtonComponent', () => {
  let component: AddWaypointButtonComponent;
  let fixture: ComponentFixture<AddWaypointButtonComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddWaypointButtonComponent],
      imports: [NgMaterialModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWaypointButtonComponent);
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
