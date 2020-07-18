import { Component, OnInit } from '@angular/core';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  tripsultantLogo: string;

  constructor() {
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
