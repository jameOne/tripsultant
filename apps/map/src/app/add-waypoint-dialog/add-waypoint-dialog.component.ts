import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppStateInterface } from '~store/states/app/app.state';
import { Store, select } from '@ngrx/store';
import {
  closeWaypointLocationDialog,
  openWaypointLocationDialog
} from '~store/actions/add-waypoint-dialog/add-waypoint-dialog.actions';
import {
  removeTripWaypoint
} from '~store/actions/side-navigation-content/waypoint.actions';
import { combineLatest, Observable } from 'rxjs';
import {
  selectSelectedTripIndex,
  selectSelectedWaypointIndex
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { PlacesQueryAutocompleteResponseInterface } from '~models/google-services/places-query-autocomplete.interface';

@Component({
  selector: 'tripsultant-apps-map-add-waypoint-dialog',
  templateUrl: './add-waypoint-dialog.component.html',
  styleUrls: ['./add-waypoint-dialog.component.scss']
})
export class AddWaypointDialogComponent implements OnInit, OnDestroy {

  waypointData: { location: PlacesQueryAutocompleteResponseInterface };
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  selectedWaypointIndex$: Observable<number[]>;
  selectedWaypointIndex: number;

  constructor(
    public dialogRef: MatDialogRef<AddWaypointDialogComponent>,
    private store: Store<AppStateInterface>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.waypointData = data.waypointData;
    this.selectedWaypointIndex$ = store.pipe(select(selectSelectedWaypointIndex));
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
  }

  ngOnInit(): void {
    combineLatest([
      this.selectedTripIndex$,
      this.selectedWaypointIndex$
    ]).pipe().subscribe(([selectedTripIndex, selectedWaypointIndex]) => {
      this.selectedTripIndex = selectedTripIndex;
      this.selectedWaypointIndex = selectedWaypointIndex[selectedTripIndex];
    });
    this.waypointData = { location: null };
    this.store.dispatch(openWaypointLocationDialog());
  }

  ngOnDestroy() {
    this.store.dispatch(closeWaypointLocationDialog());
  }

  closeDialog(): void {
    this.dialogRef.close(this.waypointData);
    this.store.dispatch(removeTripWaypoint({
      parentIndex: this.selectedTripIndex,
      childIndex: this.selectedWaypointIndex
    }));
  }

  addWaypoint(location: PlacesQueryAutocompleteResponseInterface): void {
    this.waypointData.location = location;
  }

  onSubmit(): void {
    this.dialogRef.close(this.waypointData);
  }
}
