import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '~store/states/app/app.state';
import { toggleSideNavigation } from '~store/actions/side-navigation/side-navigation.actions';
import { Observable } from 'rxjs';
import { selectSideNavigation } from '~store/selectors/side-navigation/side-navigation.selectors';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'tripsultant-apps-map-side-navigation-toggle',
  templateUrl: './side-navigation-toggle.component.html',
  styleUrls: ['./side-navigation-toggle.component.scss']
})
export class SideNavigationToggleComponent implements OnInit {

  sideNavIsOpen$: Observable<boolean>;
  sideNavIsOpen: boolean;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.sideNavIsOpen$ = store.pipe(select(selectSideNavigation));
  }

  ngOnInit(): void {
    this.sideNavIsOpen$.pipe(distinctUntilChanged()).subscribe((sideNavIsOpen) => {
      this.sideNavIsOpen = sideNavIsOpen;
    });
  }

  userToggledSideNav(): void {
    this.store.dispatch(toggleSideNavigation());
  }

}
