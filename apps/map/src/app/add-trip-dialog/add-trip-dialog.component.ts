import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTripFormComponent } from '~app/add-trip-form/add-trip-form.component';
import { AppStateInterface } from '~store/states/app/app.state';
import { Store, select } from '@ngrx/store';
import { openSideNavigation } from '~store/actions/side-navigation/side-navigation.actions';
import { removeTrip } from '~store/actions/side-navigation-content/trip.actions';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { closeTripNameDialog, openTripNameDialog } from '~store/actions/add-trip-dialog/add-trip-dialog.actions';

@Component({
  selector: 'tripsultant-apps-map-add-trip-dialog',
  templateUrl: './add-trip-dialog.component.html',
  styleUrls: ['./add-trip-dialog.component.scss']
})
export class AddTripDialogComponent implements OnInit, OnDestroy {

  tripData: { name: string };
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;

  @ViewChild('form') addTripForm: AddTripFormComponent;

  constructor(
    public dialogRef: MatDialogRef<AddTripDialogComponent>,
    private store: Store<AppStateInterface>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.tripData = data.tripData;
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
  }

  ngOnInit(): void {
    this.store.dispatch(openTripNameDialog());
    this.tripData = { name: '' };
    this.selectedTripIndex$.pipe(
      filter(selectedTripIndex => selectedTripIndex !== undefined)
    ).subscribe((selectedTripIndex) => {
      this.selectedTripIndex = selectedTripIndex;
    });
  }

  ngOnDestroy() {
    this.store.dispatch(closeTripNameDialog());
  }

  closeDialog(): void {
    this.dialogRef.close(this.tripData);
    this.store.dispatch(removeTrip());
  }

  nameTrip(name: string): void {
    this.tripData.name = name;
    this.dialogRef.close(this.tripData);
  }

  onSubmit(): void {
    this.addTripForm.onSubmit();
    this.store.dispatch(openSideNavigation());
  }

}


