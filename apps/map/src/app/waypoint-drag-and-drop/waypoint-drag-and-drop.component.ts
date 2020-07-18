import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import {
  selectSelectedTripIndex,
  selectTripWaypoints
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { map } from 'rxjs/operators';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  removeTripWaypoint,
  reorderWaypointGroups
} from '~store/actions/side-navigation-content/waypoint.actions';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-waypoint-drag-and-drop',
  templateUrl: './waypoint-drag-and-drop.component.html',
  styleUrls: ['./waypoint-drag-and-drop.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-200%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class WaypointDragAndDropComponent implements OnInit {

  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  tripWayPoints$: Observable<WaypointInterface[][]>;
  tripWaypoints: WaypointInterface[];
  tripsultantLogo: string;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.tripWayPoints$ = store.pipe(select(selectTripWaypoints));
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

  ngOnInit(): void {
    this.selectedTripIndex$.pipe().subscribe(selectedTripIndex => {
      this.selectedTripIndex = selectedTripIndex;
      this.tripWayPoints$.pipe(
        map(tripWaypointGroups => tripWaypointGroups[this.selectedTripIndex])
      ).subscribe(tripWaypoints => {
        this.tripWaypoints = tripWaypoints;
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(reorderWaypointGroups({
      parentIndex: this.selectedTripIndex,
      previousChildIndex: event.previousIndex,
      currentChildIndex: event.currentIndex
    }));
  }

  trackBy(index: number, item: WaypointInterface): number {
    return index;
  }

  removeWaypoint(index: number): void {
    this.store.dispatch(removeTripWaypoint({
      parentIndex: this.selectedTripIndex,
      childIndex: index
    }));
  }

}
