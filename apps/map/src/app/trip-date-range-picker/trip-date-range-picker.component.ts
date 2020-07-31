import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStateInterface } from '~store/states/app/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { setSelectedTripEndDate, setSelectedTripStartDate } from '~store/actions/side-navigation-content/trip.actions';
import { getSelectedMediaQuery, MediaQueriesEntity } from '@tripsultant/ngrx-analytics';

@Component({
  selector: 'tripsultant-apps-map-trip-date-range-picker',
  templateUrl: './trip-date-range-picker.component.html',
  styleUrls: ['./trip-date-range-picker.component.scss']
})
export class TripDateRangePickerComponent implements OnInit {
  rangeFormGroup: FormGroup;

  selectedMediaQuery$: Observable<MediaQueriesEntity>;
  selectedMediaQuery: MediaQueriesEntity;

  @ViewChild('picker') matDateRangePicker: MatDateRangePicker<Date>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<Object>
  ) {
    this.selectedMediaQuery$ = store.pipe(select(getSelectedMediaQuery));
  }

  ngOnInit(): void {
    this.selectedMediaQuery$.pipe().subscribe(selectedMediaQuery => {
      this.selectedMediaQuery = selectedMediaQuery;
    });

    this.rangeFormGroup = this.formBuilder.group({
      start: [null, [Validators.required]],
      end: [null, [Validators.required]]
    });
  }

  dateRangePickerClosed(): void {
    const startDate = this.rangeFormGroup.controls.start.value;
    console.log(startDate);
    this.store.dispatch(setSelectedTripStartDate({
      startDate
    }));

    const endDate = this.rangeFormGroup.controls.end.value;
    console.log(endDate);
    this.store.dispatch(setSelectedTripEndDate({
      endDate
    }));
  }

}
