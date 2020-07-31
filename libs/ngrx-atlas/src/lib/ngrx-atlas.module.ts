import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMaps from './maps/maps.reducer';
import { MapsEffects } from './maps/maps.effects';
import { MapsFacade } from './maps/maps.facade';
import { MapsComponent } from './maps/maps/maps.component';
import { AtlasesComponent } from './atlases/atlases/atlases.component';
import * as fromAtlases from './atlases/atlases.reducer';
import { AtlasesEffects } from './atlases/atlases.effects';
import { AtlasesFacade } from './atlases/atlases.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMaps.MAPS_FEATURE_KEY, fromMaps.MAPS_REDUCER),
    EffectsModule.forFeature([MapsEffects]),
    StoreModule.forFeature(
      fromAtlases.ATLASES_FEATURE_KEY,
      fromAtlases.ATLASES_REDUCER
    ),
    EffectsModule.forFeature([AtlasesEffects]),
  ],
  providers: [MapsFacade, AtlasesFacade],
  declarations: [MapsComponent, AtlasesComponent],
})
export class NgrxAtlasModule {}
