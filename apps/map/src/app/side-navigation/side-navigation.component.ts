import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectPanelSelection, selectSideNavigation } from '~store/selectors/side-navigation/side-navigation.selectors';
import { AppStateInterface } from '~store/states/app/app.state';
import {
  closeSideNavigation, pushChatButton,
  pushDirectionsButton,
  pushRouteWaypointButton
} from '~store/actions/side-navigation/side-navigation.actions';
import { TripInterface } from '~models/side-navigation-content/trip.interface';
import {
  selectSelectedTripIndex,
  selectTripList,
  selectTripWaypoints
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { slideCounter } from '../app.animations.triggers';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import { distinctUntilChanged } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';
import { getMediaQueriesEntities, getSelectedMediaQuery, MediaQueriesEntity } from '@tripsultant/ngrx-analytics';

@Component({
  selector: 'tripsultant-apps-map-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  animations: [slideCounter]
})
export class SideNavigationComponent implements OnInit {

  panelOpenState: boolean;
  sideNavigation$: Observable<boolean>;
  sideNavigation: boolean;
  panelSelectionState$: Observable<number>;
  panelSelectionState: number;
  trips$: Observable<TripInterface[]>;
  trips: TripInterface[];
  waypoints$: Observable<WaypointInterface[][]>;
  currentWaypoints: WaypointInterface[];
  selectedTripIndex$: Observable<number>;

  selectedMediaQuery$: Observable<MediaQueriesEntity>;
  selectedMediaQuery: MediaQueriesEntity;

  constructor(
    private store: Store<Object>
  ) {
    this.trips$ = store.pipe(select(selectTripList));
    this.sideNavigation$ = store.pipe(select(selectSideNavigation));
    this.panelSelectionState$ = store.pipe(select(selectPanelSelection));
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.waypoints$ = store.pipe(select(selectTripWaypoints));
    this.selectedMediaQuery$ = store.pipe(select(getSelectedMediaQuery));
  }

  ngOnInit(): void {
    this.selectedMediaQuery$.pipe().subscribe(selectedMediaQuery => {
      this.selectedMediaQuery = selectedMediaQuery;
    });

    this.sideNavigation$.pipe(distinctUntilChanged()).subscribe(sideNavigation => {
      this.sideNavigation = sideNavigation;
    });
    combineLatest([
      this.selectedTripIndex$,
      this.waypoints$
    ]).pipe().subscribe(([selectedTripIndex, waypoints]) => {
      this.currentWaypoints = waypoints[selectedTripIndex];
    });
    this.panelSelectionState$.pipe().subscribe((panelSelectionState) => {
      this.panelSelectionState = panelSelectionState;
    });
    this.trips$.pipe().subscribe((trips) => {
      this.trips = trips;
    });
    this.panelOpenState = true;
  }

  closeSideNav(): void {
    this.store.dispatch(closeSideNavigation());
  }

  selectDirections(): void {
    this.store.dispatch(pushDirectionsButton());
  }

  selectRouteWaypoints(): void {
    this.store.dispatch(pushRouteWaypointButton());
  }

  selectChat(): void {
    this.store.dispatch(pushChatButton());
  }

}
