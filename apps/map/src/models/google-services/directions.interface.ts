import {
  AvoidEnum,
  DistanceInterface,
  DurationInterface,
  DurationInTrafficInterface, TrafficModelEnum, TransitModeEnum, TransitRoutingPreferenceEnum,
  TravelModeEnum, UnitsEnum
} from './distance-matrix.interface';
import { LatLngBoundsInterface, LatLngInterface } from '../map-view/lat-lng.interface';

export interface FareInterface {
  currency: string;
  value: number;
  text: string;
}

export interface ViaWaypointInterface {
  location: LatLngInterface;
  step_index: number;
  step_interpolation: number;
}

export interface TransitStopInterface {
  location: LatLngInterface;
  name: string;
}

// TransitAgency contains information about the operator of the line
export interface TransitAgencyInterface {
  // Name contains the name of the transit agency
  name: string;
  // URL contains the URL for the transit agency
  url: any;
  // Phone contains the phone number of the transit agency
  phone: string;
}

// TransitLine contains information about the transit line used in this step
export interface TransitLineInterface {
  // Name contains the full name of this transit line. eg. "7 Avenue Express".
  name: string;
  // ShortName contains the short name of this transit line.
  short_name: string;
  // Color contains the color commonly used in signage for this transit line.
  color: string;
  // Agencies contains information about the operator of the line
  agencies: TransitAgencyInterface;
  // URL contains the URL for this transit line as provided by the transit agency
  url: any;
  // Icon contains the URL for the icon associated with this line
  icon: any;
  // TextColor contains the color of text commonly used for signage of this line
  text_color: string;
  // Vehicle contains the type of vehicle used on this line
  vehicle: string;
}

export interface TransitDetailsInterface {
  // ArrivalStop contains information about the stop/station for this part of the
  // trip.
  arrival_stop: TransitStopInterface;
  // DepartureStop contains information about the stop/station for this part of the
  // trip.
  departure_stop: TransitStopInterface;
  // ArrivalTime contains the arrival time for this leg of the journey.
  arrival_time: any;
  // DepartureTime contains the departure time for this leg of the journey.
  departure_time: any;
  // Headsign specifies the direction in which to travel on this line, as it is
  // marked on the vehicle or at the departure stop.
  headsign: string;
  // Headway specifies the expected number of seconds between departures from the
  // same stop at this time
  headway: any;
  // NumStops contains the number of stops in this step, counting the arrival stop,
  // but not the departure stop
  num_stops: number;
  // Line contains information about the transit line used in this step.
  line: TransitLineInterface;
  // TripShortName contains additional information for this part of the
  // trip.
  trip_short_name: string;
}

export interface StepInterface {
  // HTMLInstructions contains formatted instructions for this step, presented as an
  // HTML text string.
  html_instructions: string;
  // Distance contains the distance covered by this step until the next step.
  distance: DistanceInterface;
  // Duration contains the typical time required to perform the step, until the next
  // step.
  duration: DurationInterface;
  // StartLocation contains the location of the starting point of this step, as a
  // single set of lat and lng fields.
  start_location: LatLngInterface;
  // EndLocation contains the location of the last point of this step, as a single
  // set of lat and lng fields.
  end_location: LatLngInterface;
  // Polyline contains a single points object that holds an encoded polyline
  // representation of the step. This polyline is an approximate (smoothed) path of
  // the step.
  polyline: PolylineInterface;
  // Steps contains detailed directions for walking or driving steps in transit
  // directions. Substeps are only available when travel_mode is set to "transit".
  // The inner steps array is of the same type as steps.
  steps: StepInterface[];
  // TransitDetails contains transit specific information. This field is only
  // returned with travel mode is set to "transit".
  transit_details: TransitDetailsInterface;
}

export interface LegInterface {
  // Steps contains an array of steps denoting information about each separate step
  // of the leg of the journey.
  steps: StepInterface[];
  // Distance indicates the total distance covered by this leg.
  distance: DistanceInterface;
  // Duration indicates total time required for this leg.
  duration: DurationInterface;
  // DurationInTraffic indicates the total duration of this leg. This value is an
  // estimate of the time in traffic based on current and historical traffic
  // conditions.
  duration_in_traffic: DurationInTrafficInterface;
  // ArrivalTime contains the estimated time of arrival for this leg. This property
  // is only returned for transit directions.
  arrival_time: any;
  // DepartureTime contains the estimated time of departure for this leg. This
  // property is only returned for transit directions.
  departure_time: any;
  // StartLocation contains the latitude/longitude coordinates of the origin of this
  // leg.
  start_location: LatLngInterface;
  // EndLocation contains the latitude/longitude coordinates of the destination of
  // this leg.
  end_location: LatLngInterface;
  // StartAddress contains the human-readable address (typically a street address)
  // reflecting the start location of this leg.
  start_address: string;
  // EndAddress contains the human-readable address (typically a street address)
  // reflecting the end location of this leg.
  end_address: string;
  // ViaWaypoint contains info about points through which the route was laid.
  via_waypoint: ViaWaypointInterface;
}

// Polyline represents a list of lat,lng points encoded as a byte array.
// See: https://developers.google.com/maps/documentation/utilities/polylinealgorithm
export interface PolylineInterface {
  points: string;
}

export interface RouteInterface {
  // Summary contains a short textual description for the route, suitable for
  // naming and disambiguating the route from alternatives.
  summary: string;
  // Legs contains information about a leg of the route, between two locations within
  // the given route. A separate leg will be present for each waypoint or destination
  // specified. A route with no waypoints will contain exactly one leg within the legs
  // array.
  legs: LegInterface[];
  // WaypointOrder contains an array indicating the order of any waypoints in the
  // calculated route.
  waypoint_order: number[];
  // OverviewPolyline contains an approximate (smoothed) path of the resulting
  // directions.
  overview_polyline: PolylineInterface;
  // Bounds contains the viewport bounding box of the overview polyline.
  bounds: LatLngBoundsInterface;
  // Copyrights contains the copyrights text to be displayed for this route. You
  // must handle and display this information yourself.
  copyrights: string;
  // Warnings contains an array of warnings to be displayed when showing these
  // directions. You must handle and display these warnings yourself.
  warnings: string[];
  // Fare contains the total fare (that is, the total ticket costs) on this route.
  // This property is only returned for transit requests and only for routes where
  // fare information is available for all transit legs.
  fare: FareInterface;
}

export interface GeocodedWaypointInterface {
  // GeocoderStatus indicates the status code resulting from the geocoding operation.
  // This field may contain the following values.
  geocoder_status: string;
  // PartialMatch indicates that the geocoder did not return an exact match for the
  // original request, though it was able to match part of the requested address.
  partial_match: boolean;
  // PlaceID is a unique identifier that can be used with other Google APIs.
  place_id: string;
  // Types indicates the address type of the geocoding result used for calculating
  // directions.
  types: string[];
}

export interface DirectionsResponseInterface {
  routes: RouteInterface[];
  geocoded_waypoints: GeocodedWaypointInterface[];
}

export interface DirectionsRequestInterface {
  // Origin is the address or textual latitude/longitude value from which you wish to
  // calculate directions. Required.
  origin: string;
  // Destination is the address or textual latitude/longitude value from which you
  // wish to calculate directions. Required.
  destination: string;
  // Mode specifies the mode of transport to use when calculating directions.
  // Optional.
  mode: TravelModeEnum;
  // DepartureTime specifies the desired time of departure. You can specify the time
  // as an integer in seconds since midnight, January 1, 1970 UTC. Alternatively, you
  // can specify a value of `"now"`. Optional.
  departureTime: string;
  // ArrivalTime specifies the desired time of arrival for transit directions, in
  // seconds since midnight, January 1, 1970 UTC. Optional. You cannot specify both
  // `DepartureTime` and `ArrivalTime`.
  arrivalTime: string;
  // Waypoints specifies an array of points to add to a route. Optional.
  waypoints: string[];
  // Alternatives specifies if Directions service may provide more than one route
  // alternative in the response. Optional.
  alternatives: boolean;
  // Optimize allow the Directions service to optimize the provided route by
  // rearranging the waypoints in a more efficient order. Optional.
  optimize: boolean;
  // Avoid indicates that the calculated route(s) should avoid the indicated
  // features. Optional.
  avoid: AvoidEnum;
  // Language specifies the language in which to return results. Optional.
  language: string;
  // Units specifies the unit system to use when displaying results. Optional.
  units: UnitsEnum;
  // Region specifies the region code, specified as a ccTLD two-character value.
  // Optional.
  region: string;
  // TransitMode specifies one or more preferred modes of transit. This parameter
  // may only be specified for transit directions. Optional.
  transitMode: TransitModeEnum;
  // TransitRoutingPreference specifies preferences for transit routes. Optional.
  transitRoutingPreference: TransitRoutingPreferenceEnum;
  // TrafficModel specifies traffic prediction model when requesting future
  // directions. Optional.
  trafficModel: TrafficModelEnum;
}
