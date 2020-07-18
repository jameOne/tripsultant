import { Component, OnDestroy, OnInit } from '@angular/core';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  tripsultantLogo: string;

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

}
