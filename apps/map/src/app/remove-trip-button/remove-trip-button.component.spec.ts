import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTripButtonComponent } from './remove-trip-button.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { By } from '@angular/platform-browser';

describe('RemoveTripButtonComponent', () => {
  let component: RemoveTripButtonComponent;
  let fixture: ComponentFixture<RemoveTripButtonComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveTripButtonComponent],
      providers: [
        provideMockStore({ initialState }),
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
    fixture = TestBed.createComponent(RemoveTripButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a single container element', () => {
    expect(fixture.debugElement
      .query(By.css('#remove-trip-button-container'))).toBeTruthy();
  });

  it('should render the mat-stroked-button as default', () => {
    expect(fixture.debugElement
      .query(By.css('#remove-trip-mat-stroked-button'))).toBeTruthy();
    expect(fixture.debugElement
      .query(By.css('#remove-trip-mat-raised-button'))).toBeFalsy();
    expect(fixture.debugElement
      .query(By.css('#remove-trip-mat-mini-fab-button'))).toBeFalsy();
    expect(fixture.debugElement
      .query(By.css('#remove-trip-mat-mini-fab-button-icon'))).toBeFalsy();
  });

  it(
    'should render the mat-raised-button as if displayType is mat-raised-button',
    () => {
      component.displayType = 'mat-raised-button';
      fixture.detectChanges();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-stroked-button'))).toBeFalsy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-raised-button'))).toBeTruthy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-mini-fab-button'))).toBeFalsy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-mini-fab-button-icon'))).toBeFalsy();
    }
  );

  it(
    'should render the mat-mini-fab-button as if displayType is mat-mini-fab-button',
    () => {
      component.displayType = 'mat-mini-fab-button';
      fixture.detectChanges();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-stroked-button'))).toBeFalsy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-raised-button'))).toBeFalsy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-mini-fab-button'))).toBeTruthy();
      expect(fixture.debugElement
        .query(By.css('#remove-trip-mat-mini-fab-button-icon'))).toBeTruthy();
    }
  );
});
