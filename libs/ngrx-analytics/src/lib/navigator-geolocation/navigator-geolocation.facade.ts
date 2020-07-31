import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromNavigatorGeolocation from './navigator-geolocation.reducer';
import * as NavigatorGeolocationSelectors from './navigator-geolocation.selectors';

@Injectable()
export class NavigatorGeolocationFacade {
  loaded$ = this.store.pipe(
    select(NavigatorGeolocationSelectors.getNavigatorGeolocationLoaded)
  );
  allNavigatorGeolocation$ = this.store.pipe(
    select(NavigatorGeolocationSelectors.getAllNavigatorGeolocation)
  );
  selectedNavigatorGeolocation$ = this.store.pipe(
    select(NavigatorGeolocationSelectors.getSelectedNavigatorGeolocation)
  );

  constructor(
    private store: Store<
      fromNavigatorGeolocation.NavigatorGeolocationPartialState
    >
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
