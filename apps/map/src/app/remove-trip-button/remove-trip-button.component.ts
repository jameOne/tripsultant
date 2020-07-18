import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RemoveTripDialogComponent } from '~app/remove-trip-dialog/remove-trip-dialog.component';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { Observable } from 'rxjs';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';

@Component({
  selector: 'tripsultant-apps-map-remove-trip-button',
  templateUrl: './remove-trip-button.component.html',
  styleUrls: ['./remove-trip-button.component.scss']
})
export class RemoveTripButtonComponent implements OnInit {

  @Input() displayType = 'mat-stroked-button';

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

  openRemoveTripDialog(): void {
    // console.log('user clicked remove trip button.');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 2,
      title: 'Remove Trip'
    };

    const dialogRef = this.dialog.open(RemoveTripDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      // console.log('openRemoveDialog output:', data);
    });
  }

}
