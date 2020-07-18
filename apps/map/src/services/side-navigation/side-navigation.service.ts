import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  private sideNavigator: MatSidenav;

  constructor() {
  }

  public setSideNavigator(navigator: MatSidenav): void {
    this.sideNavigator = navigator;
  }

  public open(): Promise<MatDrawerToggleResult> {
    this.sideNavigator.opened = true;
    return this.sideNavigator.open();
  }

  public close(): Promise<MatDrawerToggleResult> {
    this.sideNavigator.opened = false;
    return this.sideNavigator.close();
  }

  public toggle(): Promise<MatDrawerToggleResult> {
    this.sideNavigator.opened = this.sideNavigator.opened !== true;
    return this.sideNavigator.toggle();
  }

}
