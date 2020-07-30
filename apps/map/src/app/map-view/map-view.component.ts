import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  Circle,
  circle,
  ControlOptions,
  featureGroup,
  FeatureGroup,
  icon,
  latLng,
  LatLng,
  LatLngBounds,
  Layer, MapOptions, Marker, Map,
  marker,
  polyline,
  tileLayer,
  TileLayerOptions
} from 'leaflet';
import { select, Store } from '@ngrx/store';
import { decode } from '~app/map-view/decode-polyline';
import { AppStateInterface } from '~store/states/app/app.state';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import {
  selectCenterHistoriesList,
  selectCentroidHistoriesList,
  selectFitToBoundsArray,
  selectTileLayerOptionsHistoriesList,
  selectTileLayerURLHistoriesList,
  selectZoomHistoriesList
} from '~store/selectors/map-view/map-view.selectors';
import { WaypointInterface } from '~models/side-navigation-content/waypoint.interface';
import {
  selectSelectedTripIndex,
  selectTripWaypoints
} from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { DirectionsResponseInterface } from '~models/google-services/directions.interface';
import {
  selectDirectionsResponses,
  selectSelectedRouteIndex
} from '~store/selectors/directions/directions.selectors';
import { updateSelectedRoute } from '~store/actions/directions/directions.actions';
// import {
//   selectGPSFixed,
//   selectLastNavigatorGeolocation
// } from '~store/selectors/navigator-geolocation/navigator-geolocation.selectors';
// import {
//   toggleGPSFixedBoolean
// } from '~store/actions/navigator-geolocation/navigator-geolocation.actions';
import { selectSideNavigation } from '~store/selectors/side-navigation/side-navigation.selectors';
import { INavigatorGeolocation } from '@tripsultant/ngrx-analytics';

@Component({
  selector: 'tripsultant-apps-map-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})

export class MapViewComponent implements OnInit {

  @Input() tripIndex: number;
  @Input() routeIndex: number;
  @Output() interactionHistoryEvent = new EventEmitter<{ zoomHistory: number[], centerHistory: LatLng[] }>();
  @ViewChild('centerFocus') matFabButton: ElementRef;

  tripBounds: LatLngBounds;
  tripFeatures: FeatureGroup;
  tripWayPoints$: Observable<WaypointInterface[][]>;
  zoomLevels$: Observable<number[][]>;
  currentZoomLevel: number;
  centerCoordinates$: Observable<LatLng[][]>;
  currentCenterCoordinate: LatLng;
  centroidCoordinates$: Observable<LatLng[][]>;
  tileLayerURLs$: Observable<string[][]>;
  currentTileLayerURL: string;
  tileLayerOptions$: Observable<TileLayerOptions[][]>;
  currentTileLayerOptions: TileLayerOptions;
  directionsResponses$: Observable<DirectionsResponseInterface[][]>;
  currentDirectionsResponse: DirectionsResponseInterface;
  fitToBounds$: Observable<boolean[]>;
  fitBounds: boolean;
  layers: Layer[];
  baseLayers: { [p: string]: Layer };
  layerControlOptions: ControlOptions;
  interactionHistory: { zoomHistory: number[], centerHistory: LatLng[] };
  centerEqualsCentroid = false;
  mapOptions: MapOptions;
  routeIndices$: Observable<number[]>;
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  gpsFixed$: Observable<boolean>;
  gpsFixed: boolean;
  geolocation$: Observable<INavigatorGeolocation>;
  geolocationMarker: Marker;
  geolocationCircle: Circle;

  currentMap: Map;

  sidenavOpen$: Observable<boolean>;
  sidenavOpen: boolean;


  constructor(
    private store: Store<AppStateInterface>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.zoomLevels$ = store.pipe(select(selectZoomHistoriesList));
    this.tileLayerURLs$ = store.pipe(select(selectTileLayerURLHistoriesList));
    this.tileLayerOptions$ = store.pipe(select(selectTileLayerOptionsHistoriesList));
    this.centerCoordinates$ = store.pipe(select(selectCenterHistoriesList));
    this.centroidCoordinates$ = store.pipe(select(selectCentroidHistoriesList));
    this.directionsResponses$ = store.pipe(select(selectDirectionsResponses));
    this.tripWayPoints$ = store.pipe(select(selectTripWaypoints));
    this.fitToBounds$ = store.pipe(select(selectFitToBoundsArray));
    this.routeIndices$ = store.pipe(select(selectSelectedRouteIndex));
    this.interactionHistory = { zoomHistory: [], centerHistory: [] };
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    // this.gpsFixed$ = store.pipe(select(selectGPSFixed));
    // this.geolocation$ = store.pipe(select(selectLastNavigatorGeolocation));
    this.layers = [];
    this.layerControlOptions = {
      position: 'topleft'
    };
    this.sidenavOpen$ = store.pipe(select(selectSideNavigation));
  }

  ngOnInit() {
    this.gpsFixed$.subscribe((gpsFixed) => {
      this.geolocation$.subscribe((geolocation) => {
        this.gpsFixed = gpsFixed;
        if (this.gpsFixed) {
          if (this.layers && geolocation) {
            this.geolocationMarker = marker([
                geolocation.coords.latitude,
                geolocation.coords.longitude
              ],
              {
                icon: icon({
                  iconSize: [25, 41],
                  iconAnchor: [13, 41],
                  iconUrl: '../../assets/marker-icon.png'
                })
              });
            this.layers.push(this.geolocationMarker);
            this.geolocationCircle = circle([
              geolocation.coords.latitude,
              geolocation.coords.longitude
            ], {
              radius: 1000
            });
            this.layers.push(this.geolocationCircle);
          }
        } else {
          this.layers = this.layers
            .filter(layer => (layer !== this.geolocationCircle))
            .filter(layer => (layer !== this.geolocationMarker));
        }
      });
    });

    combineLatest([
      this.tripWayPoints$.pipe(
        map(tripWaypointGroups => tripWaypointGroups[this.tripIndex]),
        filter(tripWaypoints => tripWaypoints !== undefined),
        filter(tripWaypoints => (() => {
          for (const tripWaypoint of tripWaypoints) {
            if (tripWaypoint.waypointGeocode === undefined || tripWaypoint.waypointGeocode[0] === null) {
              return false;
            }
          }
          return true;
        })()),
        map(tripWaypoints => tripWaypoints.map(tripWaypoint => marker([
          tripWaypoint.waypointGeocode[0].geometry.location.lat,
          tripWaypoint.waypointGeocode[0].geometry.location.lng
        ], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: '../../assets/marker-icon.png'
          })
        })))
      ),
      this.directionsResponses$.pipe(
        filter(directionsResponses => directionsResponses[this.tripIndex] !== undefined),
        map(directionsResponses => directionsResponses[this.tripIndex]),
        filter(directionsResponses => directionsResponses[directionsResponses.length - 1] !== undefined),
        map(directionsResponses => directionsResponses[directionsResponses.length - 1]),
        filter(directionsResponses => directionsResponses !== null)
      ),
      this.fitToBounds$.pipe(distinctUntilChanged()),
      this.routeIndices$.pipe()
    ]).pipe().subscribe(([
                           tripWaypoints,
                           directionsResponse,
                           fitToBounds,
                           routeIndices
                         ]) => {
      this.layers = [];
      this.tripFeatures = featureGroup(tripWaypoints);
      this.layers.push(featureGroup(tripWaypoints));
      this.fitBounds = fitToBounds[this.tripIndex];
      if (this.fitBounds) {
        this.refitToBounds();
      }
      this.currentDirectionsResponse = directionsResponse;
      if (this.currentDirectionsResponse.routes.length !== 0) {
        for (const route of this.currentDirectionsResponse.routes) {
          const currentRouteIndex = this.currentDirectionsResponse.routes.indexOf(route);
          let color = '#44565f';
          let opacity = 0.5;
          let weight = 5;
          const smoothFactor = 1;
          const attribution = route.copyrights;
          if (currentRouteIndex === routeIndices[this.tripIndex]) {
            color = '#1976d2';
            opacity = 0.75;
            weight = 7;
          }
          const routePolyline = polyline(decode(route.overview_polyline.points), {
            color,
            weight,
            opacity,
            smoothFactor,
            attribution
          });
          this.layers.push(routePolyline.on('click', _ => {
            this.store.dispatch(updateSelectedRoute({
              tripIndex: this.tripIndex,
              routeIndex: currentRouteIndex
            }));
          }));
        }
      }
      this.changeDetectorRef.detectChanges();
    });
    this.tileLayerURLs$.pipe(
      map(tileLayerURLs => tileLayerURLs[this.tripIndex]),
      filter(tileLayerURLs => tileLayerURLs !== undefined)
    ).subscribe(tileLayerURLs => {
      this.currentTileLayerURL = tileLayerURLs[tileLayerURLs.length - 1];
    });
    this.tileLayerOptions$.pipe(
      map(tileLayerOptions => tileLayerOptions[this.tripIndex]),
      filter(tileLayerOptions => tileLayerOptions !== undefined)
    ).subscribe(tileLayerOptionsHistory => {
      this.currentTileLayerOptions = tileLayerOptionsHistory[tileLayerOptionsHistory.length - 1];
    });
    this.zoomLevels$.pipe(
      map(zoomLevels => zoomLevels[this.tripIndex]),
      filter(zoomLevels => zoomLevels !== undefined)
    ).subscribe(zoomLevels => {
      this.currentZoomLevel = zoomLevels[zoomLevels.length - 1];
    });
    this.centerCoordinates$.pipe(
      map(centerCoordinates => centerCoordinates[this.tripIndex]),
      filter(centerCoordinates => centerCoordinates !== undefined)
    ).subscribe(centerCoordinates => {
      this.currentCenterCoordinate = centerCoordinates[centerCoordinates.length - 1];
    });
    this.baseLayers = {
      'Tile Layer': tileLayer(
        this.currentTileLayerURL,
        this.currentTileLayerOptions
      )
    };
    this.mapOptions = {
      zoomControl: false
    };

    // When the user toggles the sidenav we want to trigger size invalidation.
    this.sidenavOpen$.pipe(distinctUntilChanged()).subscribe(sidenavOpen => {
      this.sidenavOpen = sidenavOpen;
      this.smoothResize();
    });
  }


  toggleGPSFixed(): void {
    console.log('TOGGLE');
    // this.store.dispatch(toggleGPSFixedBoolean());
  }

  refitToBounds(): void {
    if (this.tripFeatures !== undefined) {
      if (this.tripFeatures.getLayers().length !== 0) {
        this.tripBounds = this.tripFeatures.getBounds().pad(0.25);
      }
    }
    this.changeDetectorRef.detectChanges();
  }

  mapZoom(zoomLevel: number): void {
    this.currentZoomLevel = zoomLevel;
    this.interactionHistory = {
      ...this.interactionHistory,
      zoomHistory: [
        ...this.interactionHistory.zoomHistory,
        this.currentZoomLevel
      ]
    };
    this.emitInteractionObject();
  }

  mapRecenter(centerCoordinate: LatLng): void {
    this.interactionHistory = {
      ...this.interactionHistory,
      centerHistory: [
        ...this.interactionHistory.centerHistory,
        latLng(centerCoordinate.lat, centerCoordinate.lng)
      ]
    };
    this.emitInteractionObject();
  }

  emitInteractionObject(): void {
    this.interactionHistoryEvent.emit(this.interactionHistory);
  }

  mapZoomIn(): void {
    if (this.currentZoomLevel < this.currentTileLayerOptions.maxZoom) {
      this.currentZoomLevel++;
    }
  }

  mapZoomOut(): void {
    if (this.currentZoomLevel > this.currentTileLayerOptions.minZoom) {
      this.currentZoomLevel--;
    }
  }

  mapReady(leafletMap: Map): void {
    this.currentMap = leafletMap;
  }

  /**
   * Smooth resize of map
   */
  private smoothResize() {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        this.currentMap.invalidateSize();
      }, 10 * i);
    }
  }
}
