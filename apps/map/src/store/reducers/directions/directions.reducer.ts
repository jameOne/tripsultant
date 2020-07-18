import { Action, createReducer, on } from '@ngrx/store';

import { DirectionsStateInterface, initialDirectionsState } from '../../states/directions/directions.state';
import {
  addDirectionsGroup,
  addDirectionsResponsesGroup,
  pushDirectionsCarButton,
  pushDirectionsFlyButton,
  pushDirectionsTransitButton,
  pushDirectionsWalkButton,
  removeCurrentDistanceInMeters,
  removeCurrentDurationInSeconds,
  removeDirectionsGroup,
  removeRouteGroup,
  setCurrentDistanceInMeters,
  setCurrentDurationInSeconds,
  updateDirectionsGroup,
  updateRouteResponseGroup, updateSelectedRoute
} from '../../actions/directions/directions.actions';
import { DirectionsModeEnum } from '~models/directions/directions.interface';


const reducer = createReducer(
  initialDirectionsState,
  on(pushDirectionsCarButton, (state) => ({
    ...state,
    directionsModeSelection: DirectionsModeEnum.DRIVING
  })),
  on(pushDirectionsTransitButton, (state) => ({
    ...state,
    directionsModeSelection: DirectionsModeEnum.TRANSIT
  })),
  on(pushDirectionsWalkButton, (state) => ({
    ...state,
    directionsModeSelection: DirectionsModeEnum.WALKING
  })),
  on(pushDirectionsFlyButton, (state) => ({
    ...state,
    directionsModeSelection: DirectionsModeEnum.FLYING
  })),
  on(addDirectionsGroup, (state) => ({
    ...state,
    directions: [...state.directions, []]
  })),
  on(addDirectionsResponsesGroup, (state) => ({
    ...state,
    directionsResponses: [...state.directionsResponses, []]
  })),
  on(removeDirectionsGroup, (state, { index }) => ({
    ...state,
    directions: [
      ...state.directions.slice(0, index),
      ...state.directions.slice(index + 1)
    ]
  })),
  on(updateDirectionsGroup, (state, { index, directions }) => ({
    ...state,
    directions: (state.directions[index] !== undefined) ? [
      ...state.directions.slice(0, index),
      [...state.directions[index], directions],
      ...state.directions.slice(index + 1)
    ] : [
      ...state.directions.slice(0, index),
      [directions],
      ...state.directions.slice(index + 1)
    ]
  })),
  on(updateSelectedRoute, (state, { tripIndex, routeIndex }) => ({
    ...state,
    selectedRouteIndex: [
      ...state.selectedRouteIndex.slice(0, tripIndex),
      routeIndex,
      ...state.selectedRouteIndex.slice(tripIndex + 1)
    ]
  })),
  on(setCurrentDurationInSeconds, (state, { index, durationInSeconds }) => ({
    ...state,
    currentDurationsInSeconds: [
      ...state.currentDurationsInSeconds.slice(0, index),
      durationInSeconds,
      ...state.currentDurationsInSeconds.slice(index + 1)
    ]
  })),
  on(setCurrentDistanceInMeters, (state, { index, distanceInMeters }) => ({
    ...state,
    currentDistancesInMeters: [
      ...state.currentDistancesInMeters.slice(0, index),
      distanceInMeters,
      ...state.currentDistancesInMeters.slice(index + 1)
    ]
  })),

  on(updateRouteResponseGroup, (state, { index, directionsResponse }) => ({
    ...state,
    directionsResponses: (state.directionsResponses[index] !== undefined) ? [
      ...state.directionsResponses.slice(0, index),
      [...state.directionsResponses[index], directionsResponse],
      ...state.directionsResponses.slice(index + 1)
    ] : [
      ...state.directionsResponses.slice(0, index),
      [directionsResponse],
      ...state.directionsResponses.slice(index + 1)
    ]
  })),
  on(removeRouteGroup, (state, { index }) => ({
    ...state,
    directionsResponses: [
      ...state.directionsResponses.slice(0, index),
      ...state.directionsResponses.slice(index + 1)
    ]
  })),
  on(removeCurrentDurationInSeconds, (state, { index }) => ({
    ...state,
    currentDurationsInSeconds: [
      ...state.currentDurationsInSeconds.slice(0, index),
      ...state.currentDurationsInSeconds.slice(index + 1)
    ]
  })),
  on(removeCurrentDistanceInMeters, (state, { index }) => ({
    ...state,
    currentDistancesInMeters: [
      ...state.currentDistancesInMeters.slice(0, index),
      ...state.currentDistancesInMeters.slice(index + 1)
    ]
  }))
);

export function directionsReducer(state: DirectionsStateInterface | undefined, action: Action) {
  return reducer(state, action);
}
