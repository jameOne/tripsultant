import { Component, Input, OnInit } from '@angular/core';
import { addTrip } from '~store/actions/side-navigation-content/trip.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTripDialogComponent } from '~app/add-trip-dialog/add-trip-dialog.component';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';

@Component({
  selector: 'tripsultant-apps-map-add-trip-button',
  templateUrl: './add-trip-button.component.html',
  styleUrls: ['./add-trip-button.component.scss']
})
export class AddTripButtonComponent implements OnInit {

  @Input() displayType = 'mat-stroked-button';

  constructor(
    public dialog: MatDialog,
    private store: Store<AppStateInterface>
  ) {
  }

  ngOnInit(): void {
  }

  openAddTripDialog(): void {
    this.store.dispatch(addTrip({
      trip: {
        name: null,
        startDate: null,
        endDate: null
      }
    }));
    // Open dialog.
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '80%';
    dialogConfig.data = {
      id: 1,
      title: 'Add Trip'
    };
    const dialogRef = this.dialog.open(AddTripDialogComponent, dialogConfig);

    // You may subscribe to the dialog afterClosed method to
    // receive any data emitted from the dialog component.
    // In case it is needed here in this component.
    dialogRef.afterClosed().subscribe((_) => {
    });
  }

}
