import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { Observable } from 'rxjs';
import {
  setSelectedTripWaypointLocation
} from '~store/actions/side-navigation-content/waypoint.actions';
import { PlacesQueryAutocompleteResponseInterface } from '~models/google-services/places-query-autocomplete.interface';

@Component({
  selector: 'tripsultant-apps-map-add-waypoint-form',
  templateUrl: './add-waypoint-form.component.html',
  styleUrls: ['./add-waypoint-form.component.scss']
})
export class AddWaypointFormComponent implements OnInit {

  @Output() waypointLocation = new EventEmitter<PlacesQueryAutocompleteResponseInterface>();

  waypointFormGroup: FormGroup;
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  submitted: boolean;

  constructor(
    private store: Store<AppStateInterface>,
    private formBuilder: FormBuilder
  ) {
    this.selectedTripIndex$ = store.select(selectSelectedTripIndex);
  }

  ngOnInit(): void {
    this.waypointFormGroup = this.formBuilder.group({
      parentIndex: ['', Validators.required],
      waypoint: ['', Validators.required]
    });
    this.selectedTripIndex$.pipe().subscribe(selectedTripIndex => {
      this.selectedTripIndex = selectedTripIndex;
    });
  }

  getLocationFromEvent(waypoint: object): void {
    this.waypointFormGroup.controls.parentIndex.setValue(this.selectedTripIndex);
    this.waypointFormGroup.controls.waypoint.setValue(waypoint);
    this.onSubmit();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.waypointFormGroup.invalid) {
      return;
    }
    this.store.dispatch(setSelectedTripWaypointLocation({
      index: this.waypointFormGroup.controls.parentIndex.value,
      waypoint: this.waypointFormGroup.controls.waypoint.value
    }));
    this.waypointLocation.emit(this.waypointFormGroup.controls.waypoint.value);
  }

}
