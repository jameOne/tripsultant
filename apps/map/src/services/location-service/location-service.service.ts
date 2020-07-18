import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor() {
  }

  // public getPosition(): Observable<Position> {
  //   return new Observable(
  //     (observer) => {
  //       navigator.geolocation.watchPosition((pos: Position) => {
  //         observer.next(pos);
  //         observer.complete();
  //       });
  //     });
  // }
}
