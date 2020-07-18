import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaypointFormComponent } from './add-waypoint-form.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { LocationAutocompleteStubComponent } from '~app/location-autocomplete/location-autocomplete.stub.component';


describe('AddWaypointFormComponent', () => {
  let component: AddWaypointFormComponent;
  let fixture: ComponentFixture<AddWaypointFormComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddWaypointFormComponent,
        LocationAutocompleteStubComponent
      ],
      providers: [provideMockStore({ initialState })],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWaypointFormComponent);
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
