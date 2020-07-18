import { Component, Input, OnInit } from '@angular/core';
import { AppStateInterface } from '~store/states/app/app.state';
import { combineLatest, Observable } from 'rxjs';
import { DirectionsResponseInterface, RouteInterface } from '~models/google-services/directions.interface';
import { selectDirectionsResponses } from '~store/selectors/directions/directions.selectors';
import { select, Store } from '@ngrx/store';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tripsultant-apps-map-transit-directions-information',
  templateUrl: './transit-directions-information.component.html',
  styleUrls: ['./transit-directions-information.component.scss']
})
export class TransitDirectionsInformationComponent implements OnInit {

  @Input() routeIndex: number;

  selectedTripIndex$: Observable<number>;
  directionsResponses$: Observable<DirectionsResponseInterface[][]>;
  currentRoute: RouteInterface;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.directionsResponses$ = store.pipe(select(selectDirectionsResponses));
  }

  ngOnInit(): void {
    combineLatest([
      this.selectedTripIndex$,
      this.directionsResponses$.pipe(
        filter(directionsResponses => directionsResponses !== undefined),
        filter(directionsResponses => directionsResponses.length !== 0)
      )
    ]).subscribe(([selectedTripIndex, directionsResponses]) => {
      this.currentRoute = directionsResponses[selectedTripIndex]
        [directionsResponses[selectedTripIndex].length - 1]
        .routes[this.routeIndex];
      console.log(this.currentRoute);
    });
  }
}
