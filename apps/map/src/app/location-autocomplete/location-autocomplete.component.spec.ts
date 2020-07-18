import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAutocompleteComponent } from './location-autocomplete.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LocationAutocompleteComponent', () => {
  let component: LocationAutocompleteComponent;
  let fixture: ComponentFixture<LocationAutocompleteComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAutocompleteComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        NgMaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form element containing the autocomplete field', () => {
    expect(fixture.debugElement
      .query(By.css('#location-autocomplete-form'))).toBeTruthy();
  });

  it('should have a form field containing the autocomplete input', () => {
    expect(fixture.debugElement
      .query(By.css('#location-autocomplete-form-input'))).toBeTruthy();
  });

  it(
    'should have a form field containing the mat autocomplete component',
    () => {
      expect(fixture.debugElement
        .query(By.css('#location-autocomplete'))).toBeTruthy();
    }
  );

});
