import { Component, OnInit } from '@angular/core';
import { assetMapping, AssetMappingInterface } from '~assets/assets.mapping';
import { SocialHyperlinkInterface } from '~environments/environment.interface';
import { environment } from '~environments/environment';

@Component({
  selector: 'tripsultant-apps-map-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  assetMapping: AssetMappingInterface;
  socialHyperlinks: SocialHyperlinkInterface;

  constructor() {
  }

  ngOnInit(): void {
    this.assetMapping = assetMapping;
    this.socialHyperlinks = environment.hyperlinks.social;
  }

}
