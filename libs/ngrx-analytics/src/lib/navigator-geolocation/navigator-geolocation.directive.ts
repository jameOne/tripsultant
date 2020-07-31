import { Directive, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadNavigatorGeolocations, updateNavigatorGeolocation } from './navigator-geolocation.actions';
import { nullPosition } from './navigator-geolocation.models';
import { addNavigatorGeolocation } from './navigator-geolocation.actions';
import { loader } from 'webpack';

@Directive({
  selector: '[reAnalyticsNavigatorGeolocation]'
})
export class NavigatorGeolocationDirective implements OnInit {



  constructor(
    private store: Store<Object>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadNavigatorGeolocations());

    this.navigatorGeolocation.watchPosition((position: Position) => {
      this.dispatchPosition(position);
    });

  }

  dispatchPosition(position: Position): void {
    this.store.dispatch(addNavigatorGeolocation({
      navigatorGeolocation: {
        id: position.timestamp.toString(),
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
    }));
  }

  get navigatorGeolocation(): Geolocation {
    return navigator.geolocation;
  }

}
