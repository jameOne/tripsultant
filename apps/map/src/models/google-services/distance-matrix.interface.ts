export enum TravelModeEnum {
  BICYCLING = 'bicycling',
  DRIVING = 'driving',
  TRANSIT = 'transit',
  WALKING = 'walking',
}

export enum AvoidEnum {
  TOLLS = 'tolls',
  HIGHWAYS = 'highways',
  FERRIES = 'ferries',
}

export enum UnitsEnum {
  METRIC = 'metric',
  IMPERIAL = 'imperial',
}

export enum TrafficModelEnum {
  BEST_GUESS = 'best_guess',
  OPTIMISTIC = 'optimistic',
  PESSIMISTIC = 'pessimistic',
}

export enum TransitModeEnum {
  BUS = 'bus',
  RAIL = 'rail',
  SUBWAY = 'subway',
  TRAIN = 'train',
  TRAM = 'tram',
}

export enum TransitRoutingPreferenceEnum {
  LESS_WALKING = 'less_walking',
  FEWER_TRANSFERS = 'fewer_transfers',
}


export interface DistanceMatrixRequestInterface {
  origins: string[];
  destinations: string[];
  mode: TravelModeEnum;
  language: string;
  avoid: AvoidEnum;
  units: UnitsEnum;
  departureTime: string;
  arrivalTime: string;
  trafficModel: TrafficModelEnum;
  transitMode: TransitModeEnum[];
  transitRoutingPreference: TransitRoutingPreferenceEnum;
}

export interface DistanceMatrixElementsRowInterface {
  elements: DistanceMatrixElementInterface[];
}

export interface DistanceInterface {
  text: string;
  value: number;
}

export interface DurationInterface {
  text: string;
  value: number;
}

export interface DurationInTrafficInterface {
  text: string;
  value: number;
}

export interface DistanceMatrixElementInterface {
  status: string;
  duration: DurationInterface;
  durationInTraffic: DurationInTrafficInterface;
  distance: DistanceInterface;
}

export interface DistanceMatrixResponseInterface {
  origin_addresses: string[];
  destination_addresses: string[];
  rows: DistanceMatrixElementsRowInterface[];
}
