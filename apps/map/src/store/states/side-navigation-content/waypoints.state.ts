import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';

export interface WaypointsStateInterface {
  waypoints: WaypointInterface[][];
  selectedTripWaypointIndex: number[];
}

export const initialWaypointState: WaypointsStateInterface = {
  waypoints: [],
  selectedTripWaypointIndex: []
};
