import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import { AppStateInterface } from '~store/states/app/app.state';
import { Store, select } from '@ngrx/store';
import {
  selectSelectedTrip
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import {
  removeTrip
} from '~store/actions/side-navigation-content/trip.actions';

@Component({
  selector: 'tripsultant-apps-map-map-menu-remove-trip-dialog',
  templateUrl: './remove-trip-dialog.component.html',
  styleUrls: ['./remove-trip-dialog.component.scss']
})
export class RemoveTripDialogComponent implements OnInit {

  tripData: { name: string };
  selectedTrip$: Observable<TripInterface>;
  selectedTrip: TripInterface;

  selectedTripIndex$: Observable<number>;

  constructor(
    public dialogRef: MatDialogRef<RemoveTripDialogComponent>,
    private store: Store<AppStateInterface>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.tripData = data.tripData;
    this.selectedTrip$ = this.store.pipe(select(selectSelectedTrip));
  }

  ngOnInit(): void {
    this.tripData = { name };
    this.selectedTrip$.pipe().subscribe(selectedTrip => {
      this.selectedTrip = selectedTrip;
    });
  }

  closeDialog(): void {
    this.dialogRef.close(this.tripData);
  }

  deleteTrip(): void {
    this.store.dispatch(removeTrip());
    this.closeDialog();
  }
}
