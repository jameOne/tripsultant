import { Injectable } from '@angular/core';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';

@Injectable({
  providedIn: 'root'
})
export class WaypointService {

  constructor() {
  }

  createIndex(parentIndex: number, childIndex: number): { parentIndex: number, childIndex: number } {
    return { parentIndex, childIndex };
  }

}
