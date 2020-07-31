import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMaps from './+state/maps/maps.reducer';
import { MapsEffects } from './+state/maps/maps.effects';
import { MapsFacade } from './+state/maps/maps.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMaps.MAPS_FEATURE_KEY, fromMaps.reducer),
    EffectsModule.forFeature([MapsEffects]),
  ],
  providers: [MapsFacade],
})
export class NgrxAtlasModule {}
