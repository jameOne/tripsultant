import { Injectable } from '@angular/core';
import { PointInterface } from '~models/side-navigation-content/distances.interface';
import { Distances } from '~models/side-navigation-content/distances';

@Injectable({
  providedIn: 'root'
})
export class DistancesService {

  constructor() {
  }

  getHavDistance(p1: PointInterface, p2: PointInterface): number {
    const d = new Distances(p1, p2);
    return d.getHavDistance();
  }

}
