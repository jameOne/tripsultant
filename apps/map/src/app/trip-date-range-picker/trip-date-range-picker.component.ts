import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppStateInterface } from '~store/states/app/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectScreenWidthIsLtMd } from '~store/selectors/media-query/media-query.selectors';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { setSelectedTripEndDate, setSelectedTripStartDate } from '~store/actions/side-navigation-content/trip.actions';

@Component({
  selector: 'tripsultant-apps-map-trip-date-range-picker',
  templateUrl: './trip-date-range-picker.component.html',
  styleUrls: ['./trip-date-range-picker.component.scss']
})
export class TripDateRangePickerComponent implements OnInit {
  rangeFormGroup: FormGroup;
  screenWidthLtMd$: Observable<boolean>;
  screenWidthLtMd: boolean;

  @ViewChild('picker') matDateRangePicker: MatDateRangePicker<Date>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.screenWidthLtMd$ = store.pipe(select(selectScreenWidthIsLtMd));
  }

  ngOnInit(): void {
    this.screenWidthLtMd$.pipe().subscribe(screenWidthLtMd => {
      this.screenWidthLtMd = screenWidthLtMd;
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
