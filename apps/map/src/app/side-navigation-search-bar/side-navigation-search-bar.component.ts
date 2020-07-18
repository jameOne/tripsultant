import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { combineLatest, Observable } from 'rxjs';
import {
  selectDirectionsModeSelection,
  selectStringFormattedCurrentDistancesInMeters,
  selectStringFormattedCurrentDurationInSeconds
} from '~store/selectors/directions/directions.selectors';
import {
  selectSelectedTripIndex,
  selectSelectedWaypointIndex, selectTripList, selectTripWaypoints
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import { fadeInAndOut } from '../app.animations.triggers';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import {
  pushDirectionsCarButton, pushDirectionsFlyButton,
  pushDirectionsTransitButton,
  pushDirectionsWalkButton
} from '~store/actions/directions/directions.actions';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-side-navigation-search-bar',
  templateUrl: './side-navigation-search-bar.component.html',
  styleUrls: ['./side-navigation-search-bar.component.scss'],
  animations: [fadeInAndOut]
})
export class SideNavigationSearchBarComponent implements OnInit {

  stringFormattedCurrentDurationsInSeconds$: Observable<string[]>;
  stringFormattedDuration: string;
  stringFormattedCurrentDistancesInMeters$: Observable<string[]>;
  stringFormattedDistance: string;
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  trips$: Observable<TripInterface[]>;
  currentTrip: TripInterface;
  tripWaypoints$: Observable<WaypointInterface[][]>;
  currentWaypoints: WaypointInterface[];
  selectedTripWaypointIndex$: Observable<number[]>;
  selectedTripWaypointIndex: number;
  directionsModeSelectionState$: Observable<number>;
  directionsModeSelectionState: number;

  tripsultantLogo: string;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.stringFormattedCurrentDurationsInSeconds$ = store.pipe(select(selectStringFormattedCurrentDurationInSeconds));
    this.stringFormattedCurrentDistancesInMeters$ = store.pipe(select(selectStringFormattedCurrentDistancesInMeters));
    this.directionsModeSelectionState$ = store.pipe(select(selectDirectionsModeSelection));
    this.trips$ = store.pipe(select(selectTripList));
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.selectedTripWaypointIndex$ = store.pipe(select(selectSelectedWaypointIndex));
    this.tripWaypoints$ = store.pipe(select(selectTripWaypoints));
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

  ngOnInit(): void {
    this.directionsModeSelectionState$.pipe().subscribe((directionsModeSelectionState) => {
      this.directionsModeSelectionState = directionsModeSelectionState;
    });
    combineLatest([
      this.stringFormattedCurrentDurationsInSeconds$,
      this.stringFormattedCurrentDistancesInMeters$,
      this.selectedTripIndex$,
      this.selectedTripWaypointIndex$,
      this.tripWaypoints$,
      this.trips$
    ]).pipe().subscribe(
      ([
         currentDurationsInSeconds,
         currentDistancesInMeters,
         selectedTripIndex,
         selectedTripWaypointIndex,
         tripWaypoints,
         trips
       ]) => {
        this.selectedTripIndex = selectedTripIndex;
        this.stringFormattedDuration = currentDurationsInSeconds[this.selectedTripIndex];
        this.stringFormattedDistance = currentDistancesInMeters[this.selectedTripIndex];
        this.selectedTripWaypointIndex = selectedTripWaypointIndex[this.selectedTripIndex];
        this.currentWaypoints = tripWaypoints[this.selectedTripIndex];
        this.currentTrip = trips[this.selectedTripIndex];
      });
  }

  selectCarDirections(): void {
    this.store.dispatch(pushDirectionsCarButton());
  }

  selectTransitDirections(): void {
    this.store.dispatch(pushDirectionsTransitButton());
  }

  selectWalkingDirections(): void {
    this.store.dispatch(pushDirectionsWalkButton());
  }

  selectFlyingDirections(): void {
    this.store.dispatch(pushDirectionsFlyButton());
  }
}
