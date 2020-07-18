// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { EnvironmentInterface } from '~environments/environment.interface';

export const environment: EnvironmentInterface = {
  production: false,
  hyperlinks: {
    social: {
      facebook: 'http://localhost:4200/hyperlink-test-page',
      twitter: 'http://localhost:4200/hyperlink-test-page',
      linkedIn: 'http://localhost:4200/hyperlink-test-page',
      github: 'http://localhost:4200/hyperlink-test-page'
    }
  },
  tileLayerEndpoints: {
    tileLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    assetAttribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
