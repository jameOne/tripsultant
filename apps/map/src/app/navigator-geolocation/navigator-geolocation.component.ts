import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '~store/states/app/app.state';
import { Store } from '@ngrx/store';
import { appendPositionToGeolocationHistory } from '~store/actions/navigator-geolocation/navigator-geolocation.actions';

@Component({
  selector: 'tripsultant-apps-map-navigator-geolocation',
  templateUrl: './navigator-geolocation.component.html',
  styleUrls: ['./navigator-geolocation.component.scss']
})
export class NavigatorGeolocationComponent implements OnInit {

  constructor(
    private store: Store<AppStateInterface>
  ) {
  }

  ngOnInit(): void {

    this.geolocation?.watchPosition((position: Position) => {
      this.store.dispatch(appendPositionToGeolocationHistory({
        position: {
          coords: {
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed
          },
          timestamp: position.timestamp
        }
      }));
    });
  }

  get geolocation(): Geolocation {
    return navigator.geolocation
  }

}
