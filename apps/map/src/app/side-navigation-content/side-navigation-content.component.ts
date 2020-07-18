import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import {
  selectSelectedTripIndex,
  selectTripList, selectTripRemovalRequestAcknowledged, selectTripRemovalRequests
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { Observable, combineLatest } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import {
  setLastTripRemovalAcknowledgedFlagTrue,
  setSelectedTripIndex
} from '~store/actions/side-navigation-content/trip.actions';
import { LatLng, LatLngExpression } from 'leaflet';
import { updateCenterHistory, updateZoomHistory } from '~store/actions/map-view/map-view.actions';
import { selectTripNameDialogIsOpen } from '~store/selectors/add-trip-dialog/add-trip-dialog.selectors';
import { MatRipple } from '@angular/material/core';
import { swingInAndOut } from '../app.animations.triggers';
import { selectScreenWidthIsGtXs } from '~store/selectors/media-query/media-query.selectors';

@Component({
  selector: 'tripsultant-apps-map-side-navigation-content',
  templateUrl: './side-navigation-content.component.html',
  styleUrls: ['./side-navigation-content.component.scss'],
  animations: [swingInAndOut]
})
export class SideNavigationContentComponent implements OnInit {

  trips$: Observable<TripInterface[]>;
  trips: TripInterface[];
  numOfTrips: number;
  selectedTripIndex$: Observable<number>;
  tripNameDialogOpen$: Observable<boolean>;
  tripRemovalRequests$: Observable<number[]>;
  lastTripRemovalRequest: number;
  tripRemovalRequestAcknowledged$: Observable<boolean>;
  tripRemovalRequestAcknowledged: boolean;
  selectedTripIndex: number;
  mapIndex: number[];
  interactionHistories: { zoomHistory: number[], centerHistory: LatLng[] }[];
  screenWidthGtXs$: Observable<boolean>;
  screenWidthGtXs: boolean;
  @ViewChild(MatRipple) matRipple: MatRipple;

  constructor(
    private store: Store<AppStateInterface>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.trips$ = store.pipe(select(selectTripList));
    this.screenWidthGtXs$ = store.pipe(select(selectScreenWidthIsGtXs));
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.tripNameDialogOpen$ = store.pipe(select(selectTripNameDialogIsOpen));
    this.tripRemovalRequests$ = store.pipe(select(selectTripRemovalRequests));
    this.tripRemovalRequestAcknowledged$ = store.pipe(select(selectTripRemovalRequestAcknowledged));
    this.interactionHistories = [];
  }

  ngOnInit(): void {
    this.screenWidthGtXs$
      .pipe(distinctUntilChanged())
      .subscribe(screenWidthGtXs => {
        this.screenWidthGtXs = screenWidthGtXs;
      });

    combineLatest([
      this.tripRemovalRequests$,
      this.tripRemovalRequestAcknowledged$
    ]).subscribe(([tripRemovalRequests, tripRemovalRequestsAcknowledged]) => {
      this.lastTripRemovalRequest = tripRemovalRequests[tripRemovalRequests.length - 1];
      this.tripRemovalRequestAcknowledged = tripRemovalRequestsAcknowledged;
    });
    this.tripNameDialogOpen$.pipe().subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
    this.trips$.pipe(
      distinctUntilChanged()
    ).subscribe((trips) => {
      this.trips = trips;
    });
    this.trips$.pipe(
      map(trips => trips.length),
      distinctUntilChanged()
    ).subscribe((numOfTrips) => {
      this.numOfTrips = numOfTrips;
      const newMapIndex: number[] = [];
      for (let i = 0; i < numOfTrips; i++) {
        newMapIndex.push(i);
      }
      this.mapIndex = newMapIndex;
    });
    this.selectedTripIndex$.pipe(distinctUntilChanged())
      .subscribe(selectedTripIndex => {
        // When the trip index changes, dump the map interaction
        // history to the store.
        this.store.dispatch(setLastTripRemovalAcknowledgedFlagTrue());
        if (this.selectedTripIndex !== selectedTripIndex
          && this.interactionHistories[this.selectedTripIndex]) {
          if (this.lastTripRemovalRequest === this.selectedTripIndex && !(this.tripRemovalRequestAcknowledged)) {
          } else {
            this.store.dispatch(updateZoomHistory({
              index: this.selectedTripIndex,
              zooms: this.interactionHistories[this.selectedTripIndex].zoomHistory
            }));
            this.store.dispatch(updateCenterHistory({
              index: this.selectedTripIndex,
              centers: this.interactionHistories[this.selectedTripIndex].centerHistory
            }));
          }
          this.interactionHistories = [
            ...this.interactionHistories.slice(0, this.selectedTripIndex),
            undefined,
            ...this.interactionHistories.slice(this.selectedTripIndex + 1)];
        }
        this.selectedTripIndex = selectedTripIndex;
      });
  }

  trackBy(index: number, _: TripInterface): number {
    return index;
  }

  setInteractionHistory(index: number, event: { zoomHistory: number[], centerHistory: LatLng[] }): void {
    this.interactionHistories = [
      ...this.interactionHistories.slice(0, index),
      event,
      ...this.interactionHistories.slice(index + 1)
    ];
  }

  selectTrip(event: MatTabChangeEvent): void {
    this.store.dispatch(setSelectedTripIndex({ index: event.index }));
    this.changeDetectorRef.detectChanges();
  }

}
