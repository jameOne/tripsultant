import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromAtlases from './atlases.reducer';
import * as AtlasesSelectors from './atlases.selectors';

@Injectable()
export class AtlasesFacade {
  loaded$ = this.store.pipe(select(AtlasesSelectors.getAtlasesLoaded));
  allAtlases$ = this.store.pipe(select(AtlasesSelectors.getAllAtlases));
  selectedAtlases$ = this.store.pipe(select(AtlasesSelectors.getSelectedAtlas));

  constructor(private store: Store<fromAtlases.AtlasesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
