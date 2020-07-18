import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameWaypointFormComponent } from './name-waypoint-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NameWaypointFormComponent', () => {
  let component: NameWaypointFormComponent;
  let fixture: ComponentFixture<NameWaypointFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameWaypointFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameWaypointFormComponent);
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
