import { Component, OnInit } from '@angular/core';
import { assetMapping } from '~assets/assets.mapping';

@Component({
  selector: 'tripsultant-apps-map-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  tripsultantLogo: string;

  constructor() {
  }

  ngOnInit(): void {
    this.tripsultantLogo = assetMapping.tripsultantLogo;
  }

}
