import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {AuthenticationComponent} from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import {RegistrationComponent} from './registration/registration.component';
// import {PasswordResetComponent} from './password-reset/password-reset.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // {path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  // {path: 'authentication', component: AuthenticationComponent, runGuardsAndResolvers: 'always'},
  { path: 'contact-information', component: ContactInformationComponent, pathMatch: 'full' },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent, pathMatch: 'full' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, pathMatch: 'full' },
  // {path: 'password-reset', component: PasswordResetComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
