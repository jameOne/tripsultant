import { Directive, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateNavigatorGeolocation } from './navigator-geolocation.actions';
import { nullPosition } from './navigator-geolocation.models';
import { addNavigatorGeolocation } from './navigator-geolocation.actions';

@Directive({
  selector: '[reAnalyticsNavigatorGeolocation]'
})
export class NavigatorGeolocationDirective implements OnInit {

  @Input() private reAnalyticsNavigatorGeolocationId = 'default';

  constructor(
    private store: Store<Object>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(addNavigatorGeolocation({
      navigatorGeolocation: {
        id: this.reAnalyticsNavigatorGeolocationId,
        position: nullPosition
      }
    }));

    this.navigatorGeolocation.watchPosition((position: Position) => {
      this.dispatchPosition(position);
    });

  }

  dispatchPosition(position: Position): void {
    this.store.dispatch(updateNavigatorGeolocation({
      update: {
        id: this.reAnalyticsNavigatorGeolocationId,
        changes: {
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
        }
      }
    }));
  }

  get navigatorGeolocation(): Geolocation {
    return navigator.geolocation;
  }

}
