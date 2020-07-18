import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '~store/states/app/app.state';
import { DirectionsStateInterface } from '~store/states/directions/directions.state';

const selectDirections = (state: AppStateInterface) => state.directions;

export const selectDirectionsResponses = createSelector(
  selectDirections,
  (state: DirectionsStateInterface) => state.directionsResponses
);

export const selectStringFormattedCurrentDistancesInMeters = createSelector(
  selectDirections,
  (state: DirectionsStateInterface) => state
    .currentDistancesInMeters.map(item => metersToKmm(item))
);

export const selectStringFormattedCurrentDurationInSeconds = createSelector(
  selectDirections,
  (state: DirectionsStateInterface) => state
    .currentDurationsInSeconds.map(item => secondsToHms(item))
);

export const selectDirectionsModeSelection = createSelector(
  selectDirections,
  (state: DirectionsStateInterface) => state
    .directionsModeSelection
);

export const selectSelectedRouteIndex = createSelector(
  selectDirections,
  (state: DirectionsStateInterface) => state
    .selectedRouteIndex
);

function secondsToHms(d) {
  if (d !== undefined) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    // const s = Math.floor(d % 3600 % 60);
    if (h > 0) {
      const hText = h.toFixed(0);
      const mText = m.toFixed(0);
      return `${hText} hr ${mText} min`;
    } else {
      const mText = m.toFixed(0);
      return `${mText} min`;
    }
  }
}

function metersToKmm(d) {
  if (d !== undefined) {
    d = Number(d);
    const k = Math.floor(d / 1000);
    const m = Math.floor(d % 1000);
    if (k > 0) {
      let kText: string;
      const mText = (m / 100).toFixed(0);
      if (mText === '10') {
        kText = (k + 1).toFixed(0);
        return `(${kText} km)`;
      }
      kText = k.toFixed(0);
      return `(${kText}.${mText} km)`;
    } else {
      const mText = m.toFixed(0);
      return `(${mText} m)`;
    }
  }
}
