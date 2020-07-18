import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, startWith, switchMap, tap } from 'rxjs/operators';
import { GooglePlacesPredictionsService } from '~services/google-services/google-places-predictions.service';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import {
  setSelectedTripWaypointName
} from '~store/actions/side-navigation-content/waypoint.actions';
import { selectSelectedTripIndex } from '~store/selectors/side-navigation-content/side-navigation-content.selectors';
import { PlacesQueryAutocompleteResponseInterface } from '~models/google-services/places-query-autocomplete.interface';

@Component({
  selector: 'tripsultant-apps-map-location-autocomplete',
  templateUrl: './location-autocomplete.component.html',
  styleUrls: ['./location-autocomplete.component.scss']
})
export class LocationAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  predictions$: Observable<object[]>;
  selectedTripIndex$: Observable<number>;
  selectedTripIndex: number;

  @Input() inputRequired: boolean;
  @Input() inputPlaceholder: string;
  @Input() optionOverride: PlacesQueryAutocompleteResponseInterface;
  @Output() selectedLocation: EventEmitter<object> = new EventEmitter();

  constructor(
    private googlePlacesPredictionsService: GooglePlacesPredictionsService,
    private store: Store<AppStateInterface>
  ) {
    this.selectedTripIndex$ = store.pipe(select(selectSelectedTripIndex));
  }

  ngOnInit() {
    this.selectedTripIndex$.pipe().subscribe((selectedTripIndex) => {
      this.selectedTripIndex = selectedTripIndex;
    });
    this.predictions$ = this.myControl.valueChanges.pipe(
      tap(term => this.store.dispatch(setSelectedTripWaypointName({ index: this.selectedTripIndex, name: term }))),
      debounceTime(300),
      startWith('Oshawa'),
      switchMap((term: string) => this.googlePlacesPredictionsService.getPredictions(term))
    );
  }

  selectPrediction(prediction: object): void {
    this.selectedLocation.emit(prediction);
    this.ngOnInit();
  }
}
