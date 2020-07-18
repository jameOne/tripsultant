import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AppStateInterface } from '../../states/app/app.state';
import {
  setLastTripRemovalAcknowledgedFlagFalse,
  setSelectedTripIndex,
  TripActionsEnum
} from '../../actions/side-navigation-content/trip.actions';
import {
  addInitialSelectedTripWaypointIndex,
  addTripWaypointGroup,
  removeSelectedTripWaypointIndex,
  removeTripWaypointsGroup,
  setSelectedTripWaypointGeocode,
  setSelectedTripWaypointIndex,
  WaypointActionsEnum
} from '../../actions/side-navigation-content/waypoint.actions';
import {
  selectSelectedTripIndex,
  selectTripList,
  selectTripWaypoints
} from '../../selectors/side-navigation-content/side-navigation-content.selectors';
import { TripService } from '~services/side-navigation-content/trip.service';
import { GoogleMapsGeocodingService } from '~services/google-services/google-maps-geocoding.service';
import {
  addCenterHistory,
  addCentroidHistory,
  addFitToBoundsBoolean,
  addTileLayerOptionsHistory,
  addTileLayerURLHistory,
  addZoomHistory,
  removeCenterHistory,
  removeCentroidHistory,
  removeFitToBoundsBoolean,
  removeMapOptionsHistory,
  removeTileLayerOptionsHistory,
  removeTileLayerURLHistory,
  removeZoomHistory, setFitToBoundsFalse,
  setFitToBoundsTrue,
  updateCentroidHistory
} from '../../actions/map-view/map-view.actions';
import { MapViewService } from '~services/map-view/map-view.service';
import { WaypointService } from '~services/side-navigation-content/waypoint.service';
import { DirectionsService } from '~services/directions/directions.service';
import {
  addDirectionsGroup,
  addDirectionsResponsesGroup,
  removeCurrentDistanceInMeters,
  removeCurrentDurationInSeconds,
  removeDirectionsGroup,
  removeRouteFormGroup,
  removeRouteGroup,
  updateDirectionsGroup,
  updateRouteResponseGroup,
  updateSelectedRoute
} from '../../actions/directions/directions.actions';
import {
  selectDirectionsModeSelection
} from '../../selectors/directions/directions.selectors';
import { GoogleMapsDirectionsService } from '~services/google-services/google-maps-directions.service';
import { environment } from '~environments/environment';
import { latLng } from 'leaflet';
import {
  appendDefaultGPSFixedBoolean,
  removeGPSFixedBoolean
} from '~store/actions/navigator-geolocation/navigator-geolocation.actions';

@Injectable()
export class TripEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppStateInterface>,
    private tripService: TripService,
    private mapViewService: MapViewService,
    private waypointService: WaypointService,
    private googleMapsGeocodingService: GoogleMapsGeocodingService,
    private directionsService: DirectionsService,
    private googleMapsDirectionsService: GoogleMapsDirectionsService
  ) {
  }

  /**
   * There are two cases in which a component can add a trip. The first being the
   * add trip button, which corresponds to a user initiated event (user clicks add
   * trip button). The second is the case occurs when the app is being bootstrapped,
   * the app component will add the users first trip if the user chooses not to log
   * in.
   *
   * In order to reduce duplication setup code, the required changes (to add another
   * trip) to the application data structure are placed in this effect which fires
   * whenever the add trip action is dispatched.
   */

  /**
   * The following effect is defined so that components are not required to decide
   * the selected trip upon adding a new trip.
   */

  setUpOnAddTripEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TripActionsEnum.AddTrip),
        tap(() => {
          combineLatest([
            this.store.pipe(select(selectTripList))
          ]).pipe(take(1)).subscribe(([tripList]) => {
            // Setup app data structure.
            this.store.dispatch(addTileLayerURLHistory({
              tileLayerURLs: [environment.tileLayerEndpoints.tileLayerURL]
            }));
            this.store.dispatch(addTileLayerOptionsHistory({
              tileLayerOptions: [{
                maxZoom: 18,
                minZoom: 3,
                attribution: environment.tileLayerEndpoints.assetAttribution
              }]
            }));
            this.store.dispatch(addZoomHistory({
              zooms: [3]
            }));
            this.store.dispatch(addCenterHistory({
              centers: [latLng(46.879966, -121.726909)]
            }));
            this.store.dispatch(addCentroidHistory({
              centroids: [latLng(46.879966, -121.726909)]
            }));
            this.store.dispatch(addTripWaypointGroup());
            this.store.dispatch(addFitToBoundsBoolean());
            this.store.dispatch(addDirectionsGroup());
            this.store.dispatch(addDirectionsResponsesGroup());
            this.store.dispatch(addInitialSelectedTripWaypointIndex());

            this.store.dispatch(appendDefaultGPSFixedBoolean());

            // Finally, increment the trip index to the newly selected trip.
            this.store.dispatch(setSelectedTripIndex({ index: tripList.length - 1 }));
          });
        })
      ),
    { dispatch: false }
  );

  /**
   * Similarly there are two cases a trip can be removed. The first is a user clicks remove trip and then
   * clicks "are you sure" button on the remove trip dialog. The second is if they click add a trip, then
   * cancel the addition of a trip by clicking "cancel" during trip addition. Thus, for the same reasons
   * as mentioned with add trip, we place the trip tear down code here in an effect so there is no
   * duplication of logic contained in components.
   */

  changeTripIndexOnRemove$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TripActionsEnum.RemoveTrip),
        tap(() => {
          combineLatest([
            this.store.pipe(select(selectSelectedTripIndex)),
            this.store.pipe(select(selectTripList))
          ]).pipe(take(1)).subscribe(([index, tripList]) => {
            const selectedTripIndexObject = { index };

            // Tear down app data structure.
            this.store.dispatch(removeMapOptionsHistory(selectedTripIndexObject));
            this.store.dispatch(removeTileLayerURLHistory(selectedTripIndexObject));
            this.store.dispatch(removeTileLayerOptionsHistory(selectedTripIndexObject));
            this.store.dispatch(removeZoomHistory(selectedTripIndexObject));
            this.store.dispatch(removeCenterHistory(selectedTripIndexObject));
            this.store.dispatch(removeCentroidHistory(selectedTripIndexObject));
            this.store.dispatch(removeTripWaypointsGroup(selectedTripIndexObject));
            this.store.dispatch(removeDirectionsGroup(selectedTripIndexObject));
            this.store.dispatch(removeCurrentDistanceInMeters(selectedTripIndexObject));
            this.store.dispatch(removeCurrentDurationInSeconds(selectedTripIndexObject));
            this.store.dispatch(removeRouteGroup(selectedTripIndexObject));
            this.store.dispatch(removeRouteFormGroup(selectedTripIndexObject));
            this.store.dispatch(removeSelectedTripWaypointIndex(selectedTripIndexObject));
            this.store.dispatch(removeFitToBoundsBoolean(selectedTripIndexObject));
            this.store.dispatch(removeGPSFixedBoolean(selectedTripIndexObject));
            this.store.dispatch(setLastTripRemovalAcknowledgedFlagFalse());

            // Finally, decrement the selected trip index depending on which
            // trip was removed.
            if (index !== 0) {
              this.store.dispatch(setSelectedTripIndex({ index: index - 1 }));
            } else {
              if (tripList.length === 0) {
                this.store.dispatch(setSelectedTripIndex({ index: -1 }));
              }
            }
          });
        })
      ),
    { dispatch: false }
  );

  /**
   * We are using a number of google services/APIs. Among them are the query autocomplete service/API
   * and the geocoding service/API. These are used in combination to provide a human readable address
   * as well as plottable latitudinal and longitudinal information simultaneously (at least it should
   * appear that way to the user).
   *
   * The below effect equates triggers waypoint geocoding (i.e. a call to the geocoding service) when
   * the waypoint location has been set (i.e. a result is chosen from the query autocomplete response)
   * .
   */

  geocodeTripWaypointLocationEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          WaypointActionsEnum.SetSelectedTripWaypointLocation
        ),
        tap(() => {
          combineLatest([
            this.store.pipe(select(selectSelectedTripIndex)),
            this.store.pipe(select(selectTripWaypoints))
          ]).pipe(take(1)).subscribe(([selectedTripIndex, tripWaypoints]) => {
            this.googleMapsGeocodingService.getGeocode(
              tripWaypoints[selectedTripIndex]
                [tripWaypoints[selectedTripIndex].length - 1].waypoint?.description)
              .pipe().subscribe((waypointGeocode) => {
              this.store.dispatch(setSelectedTripWaypointGeocode({
                index: selectedTripIndex,
                waypointGeocode
              }));
            });
          });
        })
      ),
    { dispatch: false }
  );

  /**
   * Directions, by definition, depends directly on the trip waypoints (including order).
   * So every time a waypoint has been removed, added (a geocoding action has completed),
   * or the waypoint ordering has changed we need to fetch new directions information which
   * reflects the new arrangement of waypoints.
   */

  updateDirectionsGroupEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          WaypointActionsEnum.SetSelectedTripWaypointGeocode,
          WaypointActionsEnum.ReorderWaypointGroups,
          WaypointActionsEnum.RemoveTripWaypoint
        ),
        tap(() => {
          combineLatest([
            this.store.pipe(select(selectSelectedTripIndex)),
            this.store.pipe(select(selectTripWaypoints)),
            this.store.pipe(select(selectDirectionsModeSelection))
          ]).pipe(take(1)).subscribe(
            ([
               selectedTripIndex,
               allWaypoints,
               directionsModeSelection
             ]) => {
              const orderedWaypoints = allWaypoints[selectedTripIndex]
                .map(waypoint => waypoint.waypoint.description);
              const currentDirectionsArray = this.directionsService.getMatrixEntries(
                orderedWaypoints, orderedWaypoints, orderedWaypoints);

              this.store.dispatch(updateDirectionsGroup(
                this.directionsService.generateUpdateDirectionsGroupPropInterface(selectedTripIndex, currentDirectionsArray)));

              this.googleMapsDirectionsService.getDirections(
                orderedWaypoints[0],                                    // First waypoint is considered the origin.
                orderedWaypoints[orderedWaypoints.length - 1],          // Last waypoint is considered the destination.
                orderedWaypoints.slice(1, orderedWaypoints.length - 1), // Middle waypoints are considered to be stops or midpoints.
                directionsModeSelection)
                .pipe().subscribe(response => {
                this.store.dispatch(updateRouteResponseGroup(
                  this.directionsService.generateUpdateRouteResponseGroupPropInterface(selectedTripIndex, response)
                ));

                this.store.dispatch(updateSelectedRoute(
                  this.directionsService.generateUpdateSelectedRoutePropInterface(
                    selectedTripIndex, 0)
                ));

                // By the time the routes are updated, the map has already been fit to bounds.
                // Therefore we may set the fit bounds boolean back to false in preparation
                // for the next addition.
                this.store.dispatch(setFitToBoundsFalse({ index: selectedTripIndex }));
              });
            });
        })
      ),
    { dispatch: false }
  );

  /**
   * The following effect is defined in order to recalculate the centroid upon addition
   * and removal of trip waypoints.
   */

  addTripWaypointEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          WaypointActionsEnum.AddTripWaypoint,
          WaypointActionsEnum.SetSelectedTripWaypointGeocode,
          WaypointActionsEnum.RemoveTripWaypoint
        ),
        tap(() => {
          combineLatest([
            this.store.pipe(select(selectSelectedTripIndex)),
            this.store.pipe(select(selectTripWaypoints))
          ]).pipe(take(1)).subscribe(([selectedTripIndex, waypoints]) => {
            if (waypoints[selectedTripIndex] !== undefined) {
              const tripWaypoints = waypoints[selectedTripIndex];
              const centroid = this.mapViewService.calculateCentroid(
                tripWaypoints.map(item => item.waypointGeocode));
              if (centroid !== null) {
                this.store.dispatch(updateCentroidHistory({ index: selectedTripIndex, centroids: [centroid] }));
              }
              this.store.dispatch(setSelectedTripWaypointIndex(
                this.waypointService.createIndex(selectedTripIndex, tripWaypoints.length - 1)));
              this.store.dispatch(setFitToBoundsTrue({ index: selectedTripIndex }));
            }
          });
        })
      ),
    { dispatch: false }
  );
}
