import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { setSelectedTripName } from '~store/actions/side-navigation-content/trip.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import {
  selectTripList
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { openSideNavigation } from '~store/actions/side-navigation/side-navigation.actions';


@Component({
  selector: 'tripsultant-apps-map-add-trip-form',
  templateUrl: './add-trip-form.component.html',
  styleUrls: ['./add-trip-form.component.scss']
})
export class AddTripFormComponent implements OnInit {

  @Output() tripName = new EventEmitter<string>();

  tripNameFormGroup: FormGroup;
  currentTrips$: Observable<TripInterface[]>;
  currentTripNames: string[];

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.currentTrips$ = store.pipe(select(selectTripList));
  }

  ngOnInit(): void {
    this.tripNameFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(3), this.validateName.bind(this)]]
    });
    this.currentTrips$.pipe(
      map(currentTrips => currentTrips.map(currentTrip => currentTrip.name))
    ).subscribe((tripsNames) => {
      this.currentTripNames = tripsNames;
    });
    this.tripNameFormGroup.valueChanges.pipe(
      map(value => value.name)
    ).subscribe((name: string) => {
      this.store.dispatch(setSelectedTripName({
        name
      }));
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.tripNameFormGroup.controls;
  }

  validateName(_: AbstractControl): { [key: string]: boolean } | null {
    if (this.currentTripNames !== undefined) {
      if (this.currentTripNames.includes(this.tripNameFormGroup.controls.name.value)) {
        return { nameIsNotUnique: true };
      }
      return null;
    }
    return null;
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.tripNameFormGroup.invalid) {
      return;
    }
    this.tripName.emit(this.tripNameFormGroup.controls.name.value);
    this.store.dispatch(openSideNavigation());
  }

}
