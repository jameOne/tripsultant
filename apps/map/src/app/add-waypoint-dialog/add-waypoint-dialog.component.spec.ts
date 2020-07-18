import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaypointDialogComponent } from './add-waypoint-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { AddWaypointFormStubComponent } from '~app/add-waypoint-form/add-waypoint-form.stub.component';


describe('AddWaypointDialogComponent', () => {
  let component: AddWaypointDialogComponent;
  let fixture: ComponentFixture<AddWaypointDialogComponent>;
  let mockStore: MockStore;

  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddWaypointDialogComponent,
        AddWaypointFormStubComponent
      ],
      providers: [
        provideMockStore({initialState}),
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
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
    fixture = TestBed.createComponent(AddWaypointDialogComponent);
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
