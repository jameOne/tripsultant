import { PointInterface } from './distances.interface';

export class Distances {
  p1: PointInterface;
  p2: PointInterface;

  constructor(
    p1: PointInterface,
    p2: PointInterface
  ) {
    this.p1 = p1;
    this.p2 = p2;
  }

  getHavDistance(): number {
    const R = 6371e3; // radius of Earth in meters
    const phi1 = this.p1.lat * Math.PI / 180; // convert to rad
    const phi2 = this.p2.lat * Math.PI / 180; // convert to rad
    const dPhi = (this.p2.lat - this.p1.lat) * Math.PI / 180; // delta phi
    const dTheta = (this.p2.lng - this.p2.lng) * Math.PI / 180; // delta Theta

    const a = Math.sin(dPhi / 2) * Math.sin(dPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) *
      Math.sin(dTheta / 2) * Math.sin(dTheta / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // haversine distance in meters
  }
}
