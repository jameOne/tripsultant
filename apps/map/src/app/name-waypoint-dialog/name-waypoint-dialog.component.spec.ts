import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameWaypointDialogComponent } from './name-waypoint-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NameWaypointFormStubComponent } from '~app/name-waypoint-form/name-waypoint-form.stub.component';

describe('NameWaypointDialogComponent', () => {
  let component: NameWaypointDialogComponent;
  let fixture: ComponentFixture<NameWaypointDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NameWaypointDialogComponent,
        NameWaypointFormStubComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      imports: [
        NgMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameWaypointDialogComponent);
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
