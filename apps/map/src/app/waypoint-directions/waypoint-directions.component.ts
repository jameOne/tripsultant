import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import {
  DirectionsResponseInterface,
  LegInterface,
  RouteInterface
} from '~models/google-services/directions.interface';
import { select, Store } from '@ngrx/store';
import {
  selectDirectionsModeSelection,
  selectDirectionsResponses,
  selectSelectedRouteIndex,
  selectStringFormattedCurrentDistancesInMeters,
  selectStringFormattedCurrentDurationInSeconds
} from '~store/selectors/directions/directions.selectors';
import { AppStateInterface } from '~store/states/app/app.state';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { fadeInAndOut } from '../app.animations.triggers';
import { MatRadioChange } from '@angular/material/radio';
import { updateSelectedRoute } from '~store/actions/directions/directions.actions';
import { DirectionsModeEnum } from '~models/directions/directions.interface';

interface StepNode {
  innerHTML: string;
  legIndex?: number;
  duration?: string;
  distance?: string;
  children?: StepNode[];
}

/** Flat node with expandable and level information */
interface FlatNode {
  text: string;
  index: number;
  duration: string;
  distance: string;
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'tripsultant-apps-map-waypoint-directions',
  templateUrl: './waypoint-directions.component.html',
  styleUrls: ['./waypoint-directions.component.scss'],
  animations: [fadeInAndOut]
})
export class WaypointDirectionsComponent implements OnInit {

  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;
  selectedRouteIndices$: Observable<number[]>;
  selectedRouteIndex: number;
  directionsResponses$: Observable<DirectionsResponseInterface[][]>;
  directionsMode$: Observable<DirectionsModeEnum>;
  directionsMode: DirectionsModeEnum;
  currentDirectionsRoutes: RouteInterface[];
  currentDirectionsLegs: LegInterface[][];
  currentDirectionsSummaries: string[];
  stringFormattedCurrentDurationsInSeconds$: Observable<string[]>;
  stringFormattedCurrentDistancesInMeters$: Observable<string[]>;
  panelOpenStates: boolean[];
  treeFlattener = new MatTreeFlattener(
    (node: StepNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        text: node.innerHTML,
        index: node.legIndex,
        duration: node.duration,
        distance: node.distance,
        level
      };
    }, node => node.level,
    node => node.expandable, node => node.children);
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);
  dataSource: MatTreeFlatDataSource<StepNode, FlatNode>;
  dataSources: MatTreeFlatDataSource<StepNode, FlatNode>[] = [];

  constructor(
    private store: Store<AppStateInterface>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.stringFormattedCurrentDurationsInSeconds$ = store
      .pipe(select(selectStringFormattedCurrentDurationInSeconds));
    this.stringFormattedCurrentDistancesInMeters$ = store
      .pipe(select(selectStringFormattedCurrentDistancesInMeters));
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
    this.directionsResponses$ = store.pipe(select(selectDirectionsResponses));
    this.selectedRouteIndices$ = store.pipe(select(selectSelectedRouteIndex));
    this.directionsMode$ = store.pipe(select(selectDirectionsModeSelection));
    this.panelOpenStates = [];
  }

  ngOnInit(): void {
    this.directionsMode$.pipe().subscribe(directionsMode => {
      this.directionsMode = directionsMode;
    });
    combineLatest([
      this.selectedTripIndex$,
      this.selectedRouteIndices$,
      this.directionsResponses$,
      this.stringFormattedCurrentDurationsInSeconds$,
      this.stringFormattedCurrentDistancesInMeters$
    ]).subscribe(([
                    selectedTripIndex,
                    selectedRouteIndices,
                    directionsResponses
                  ]) => {
      this.selectedTripIndex = selectedTripIndex;
      this.selectedRouteIndex = selectedRouteIndices[selectedTripIndex];
      // It is possible there are no directions responses (in the case a user
      // has removed all trips) so this case needs to be considered when setting
      // a value for the currently selected directions response.
      const currentDirectionsResponse = directionsResponses[selectedTripIndex] === undefined
        ? undefined : directionsResponses[selectedTripIndex]
          [directionsResponses[selectedTripIndex]?.length - 1];

      this.panelOpenStates = [];
      for (let i = 0; i < currentDirectionsResponse?.routes.length; i++) {
        this.panelOpenStates[i] = false;
      }

      this.currentDirectionsRoutes = currentDirectionsResponse?.routes;
      this.currentDirectionsSummaries = currentDirectionsResponse?.routes
        .map(route => route.summary);
      this.currentDirectionsLegs = currentDirectionsResponse?.routes
        .map(route => route.legs);

      this.dataSources = [];
      for (let i = 0; i < this.currentDirectionsLegs?.length; i++) {
        this.dataSource = new MatTreeFlatDataSource<StepNode, FlatNode>(this.treeControl, this.treeFlattener);
        this.dataSource.data = this.currentDirectionsLegs[i]
          .map(leg => ({
            innerHTML: null,
            legIndex: this.currentDirectionsLegs[i].indexOf(leg),
            duration:
              `${((leg.duration.text.replace('m', ' min '))
                .replace('h', ' hr ')).replace('s', ' sec ')}`,
            distance: `(${leg.distance.text})`,
            children: leg.steps.map(step => ({ innerHTML: step.html_instructions }))
          }));
        this.dataSources[i] = this.dataSource;
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  trackBy(index: number, _: RouteInterface): number {
    return index;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  determineDirectionsImage(innerHTML: string): string {
    if (innerHTML.toLowerCase().includes('left')) {
      return '../../assets/directions/turn-left.png';
    }
    if (innerHTML.toLowerCase().includes('right')) {
      return '../../assets/directions/turn-right.png';
    }
    if (innerHTML.toLowerCase().includes('merge')) {
      return '../../assets/directions/merge.png';
    }
    if (innerHTML.toLowerCase().includes('northeast')) {
      return '../../assets/directions/north-east.png';
    }
    if (innerHTML.toLowerCase().includes('northwest')) {
      return '../../assets/directions/north-west.png';
    }
    if (innerHTML.toLowerCase().includes('southeast')) {
      return '../../assets/directions/south-east.png';
    }
    if (innerHTML.toLowerCase().includes('southwest')) {
      return '../../assets/directions/south-west.png';
    }
    if (innerHTML.toLowerCase().includes('north')) {
      return '../../assets/directions/north.png';
    }
    if (innerHTML.toLowerCase().includes('south')) {
      return '../../assets/directions/north.png';
    }
    if (innerHTML.toLowerCase().includes('east')) {
      return '../../assets/directions/east.png';
    }
    if (innerHTML.toLowerCase().includes('west')) {
      return '../../assets/directions/west.png';
    }
    return '../../assets/directions/unknown.png';
  }

  superScript(index: number) {
    const strNumberLastDigit = index.toString()[index.toString().length - 1];
    if (strNumberLastDigit === '1') {
      return 'st';
    } else if (strNumberLastDigit === '2') {
      return 'nd';
    } else if (strNumberLastDigit === '3') {
      return 'rd';
    } else {
      return 'th';
    }
  }

  radioButtonChanged(event: MatRadioChange): void {
    const routeIndex = this.currentDirectionsRoutes.indexOf(event.value);
    this.store.dispatch(updateSelectedRoute({
      tripIndex: this.selectedTripIndex,
      routeIndex
    }));
  }

}
