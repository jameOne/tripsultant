import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { addTrip } from '~store/actions/side-navigation-content/trip.actions';

@Component({
  selector: 'tripsultant-apps-map-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tripsultant';

  constructor(
    private store: Store<AppStateInterface>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(addTrip({
      trip: {
        name: 'My Trip',
        startDate: null,
        endDate: null
      }
    }));
  }
}
