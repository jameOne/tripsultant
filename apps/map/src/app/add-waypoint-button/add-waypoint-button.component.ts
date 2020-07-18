import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddWaypointDialogComponent } from '../add-waypoint-dialog/add-waypoint-dialog.component';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { addTripWaypoint } from '~store/actions/side-navigation-content/waypoint.actions';

@Component({
  selector: 'tripsultant-apps-map-add-waypoint-button',
  templateUrl: './add-waypoint-button.component.html',
  styleUrls: ['./add-waypoint-button.component.scss']
})
export class AddWaypointButtonComponent implements OnInit {

  @Input() displayType = 'mat-raised-button';

  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppStateInterface>
  ) {
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
  }

  ngOnInit(): void {
    this.selectedTripIndex$.pipe().subscribe(selectedTripIndex => {
      this.selectedTripIndex = selectedTripIndex;
    });
  }

  onClick(): void {
    this.openAddWaypointDialog();
  }

  openAddWaypointDialog(): void {
    this.store.dispatch(addTripWaypoint({
      index: this.selectedTripIndex,
      waypointForm: {
        name: 'New Waypoint',
        waypoint: null,
        parentIndex: this.selectedTripIndex
      }
    }));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Add Waypoint'
    };

    const dialogRef = this.dialog.open(AddWaypointDialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(data => {});
  }
}
