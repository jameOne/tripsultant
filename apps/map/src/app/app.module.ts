import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// App
import { AppComponent } from './app.component';

// CDK
import { DragDropModule } from '@angular/cdk/drag-drop';

// Custom Directives
import { ButtonDebounceDirective } from './button-debounce.directive';

// Environment
import { environment } from '../environments/environment';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Interceptors
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';

// Angular Material
import { NgMaterialModule } from './ng-material/ng-material.module';

// 404
import { NotFoundComponent } from './not-found/not-found.component';

// Administrative Content
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

// Leaflet
import { LeafletModule } from '~leaflet/leaflet.module';

// Redux
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../store/reducers/app/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TripEffects } from '../store/effects/side-navigation-content/side-navigation-content.effects';

// Components
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsAndConditionsContentComponent } from './terms-and-conditions-content/terms-and-conditions-content.component';
import { ContactInformationContentComponent } from './contact-information-content/contact-information-content.component';
import { PrivacyPolicyContentComponent } from './privacy-policy-content/privacy-policy-content.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SideNavigationContentComponent } from './side-navigation-content/side-navigation-content.component';
import { AddTripDialogComponent } from './add-trip-dialog/add-trip-dialog.component';
import { AddTripFormComponent } from './add-trip-form/add-trip-form.component';
import { RemoveTripDialogComponent } from './remove-trip-dialog/remove-trip-dialog.component';
import { SideNavigationSearchBarComponent } from './side-navigation-search-bar/side-navigation-search-bar.component';
import { LocationAutocompleteComponent } from './location-autocomplete/location-autocomplete.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NameWaypointDialogComponent } from './name-waypoint-dialog/name-waypoint-dialog.component';
import { NameWaypointFormComponent } from './name-waypoint-form/name-waypoint-form.component';
import { AddWaypointFormComponent } from './add-waypoint-form/add-waypoint-form.component';
import { AddWaypointDialogComponent } from './add-waypoint-dialog/add-waypoint-dialog.component';
import { AddWaypointButtonComponent } from './add-waypoint-button/add-waypoint-button.component';
import { WaypointDragAndDropComponent } from './waypoint-drag-and-drop/waypoint-drag-and-drop.component';
import { AddTripButtonComponent } from './add-trip-button/add-trip-button.component';
import { RemoveTripButtonComponent } from './remove-trip-button/remove-trip-button.component';
import { WaypointDirectionsComponent } from './waypoint-directions/waypoint-directions.component';
import { TripsultantChatComponent } from './tripsultant-chat/tripsultant-chat.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { SideNavigationToggleComponent } from './side-navigation-toggle/side-navigation-toggle.component';
import { TripDateRangePickerComponent } from './trip-date-range-picker/trip-date-range-picker.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TransitDirectionsInformationComponent } from './transit-directions-information/transit-directions-information.component';
import { NgrxAnalyticsModule } from '@tripsultant/ngrx-analytics';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TermsAndConditionsComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ContactInformationComponent,
    DashboardComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    TermsAndConditionsContentComponent,
    ContactInformationContentComponent,
    PrivacyPolicyContentComponent,
    SideNavigationComponent,
    SideNavigationContentComponent,
    AddTripDialogComponent,
    AddTripFormComponent,
    RemoveTripDialogComponent,
    SideNavigationSearchBarComponent,
    LocationAutocompleteComponent,
    MapViewComponent,
    ButtonDebounceDirective,
    NameWaypointDialogComponent,
    NameWaypointFormComponent,
    AddWaypointFormComponent,
    AddWaypointDialogComponent,
    AddWaypointButtonComponent,
    WaypointDragAndDropComponent,
    AddTripButtonComponent,
    RemoveTripButtonComponent,
    WaypointDirectionsComponent,
    TripsultantChatComponent,
    NoSanitizePipe,
    SideNavigationToggleComponent,
    TripDateRangePickerComponent,
    TripDetailComponent,
    TransitDirectionsInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    DragDropModule,
    NgrxAnalyticsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TripEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
