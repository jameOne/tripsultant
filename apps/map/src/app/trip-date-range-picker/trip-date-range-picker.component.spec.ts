import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDateRangePickerComponent } from './trip-date-range-picker.component';
import { NgMaterialModule } from '~app/ng-material/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TripDateRangePickerComponent', () => {
  let component: TripDateRangePickerComponent;
  let fixture: ComponentFixture<TripDateRangePickerComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TripDateRangePickerComponent],
      imports: [
        NgMaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
