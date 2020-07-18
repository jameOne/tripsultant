import { TripInterface } from '~models/side-navigation-content/trip.interface';

export interface TripStateInterface {
  tripRemovalRequests: number[];
  tripRemovalRequestAcknowledged: boolean;
  trips: TripInterface[];
  selectedTripIndex: number;
}

export const initialTripState: TripStateInterface = {
  tripRemovalRequests: [],
  tripRemovalRequestAcknowledged: true,
  trips: [],
  selectedTripIndex: 0
};
