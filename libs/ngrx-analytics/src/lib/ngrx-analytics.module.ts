import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNavigatorGeolocation from './+state/navigator-geolocation/navigator-geolocation.reducer';
import { NavigatorGeolocationEffects } from './+state/navigator-geolocation/navigator-geolocation.effects';
import { NavigatorGeolocationFacade } from './+state/navigator-geolocation/navigator-geolocation.facade';
import { NavigatorGeolocationDirective } from './+state/navigator-geolocation/navigator-geolocation.directive';
import * as fromMediaQueries from './+state/media-queries/media-queries.reducer';
import { MediaQueriesEffects } from './+state/media-queries/media-queries.effects';
import { MediaQueriesFacade } from './+state/media-queries/media-queries.facade';
import { MediaQueriesDirective } from './+state/media-queries/media-queries.directive';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNavigatorGeolocation.NAVIGATORGEOLOCATION_FEATURE_KEY,
      fromNavigatorGeolocation.NAVIGATORGEOLOCATION_REDUCER
    ),
    EffectsModule.forFeature([NavigatorGeolocationEffects]),
    StoreModule.forFeature(
      fromMediaQueries.MEDIAQUERIES_FEATURE_KEY,
      fromMediaQueries.MEDIAQUERIES_REDUCER
    ),
    EffectsModule.forFeature([MediaQueriesEffects])
  ],
  providers: [NavigatorGeolocationFacade, MediaQueriesFacade],
  declarations: [NavigatorGeolocationDirective, MediaQueriesDirective],
  exports: [
    MediaQueriesDirective,
    NavigatorGeolocationDirective
  ]
})
export class NgrxAnalyticsModule {}
