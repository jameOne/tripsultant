import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromMaps from './maps.reducer';
import * as MapsSelectors from './maps.selectors';

@Injectable()
export class MapsFacade {
  loaded$ = this.store.pipe(select(MapsSelectors.getMapsLoaded));
  allMaps$ = this.store.pipe(select(MapsSelectors.getAllMaps));
  selectedMaps$ = this.store.pipe(select(MapsSelectors.getSelectedMap));

  constructor(private store: Store<fromMaps.MapsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
