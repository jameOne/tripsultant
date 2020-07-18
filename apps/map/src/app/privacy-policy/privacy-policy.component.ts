import { Component, OnInit } from '@angular/core';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  tripsultantLogo: string;

  constructor() {
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
