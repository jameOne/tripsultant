export interface SocialHyperlinkInterface {
  facebook: string;
  twitter: string;
  linkedIn: string;
  github: string;
}

export interface TileLayerEndpointsInterface {
  tileLayerURL: string;
  assetAttribution: string;
}

export interface HyperlinksInterface {
  social: SocialHyperlinkInterface;
}

export interface EnvironmentInterface {
  production: boolean;
  hyperlinks: HyperlinksInterface;
  tileLayerEndpoints: TileLayerEndpointsInterface;
}

