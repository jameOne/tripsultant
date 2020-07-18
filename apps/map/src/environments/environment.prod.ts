import { EnvironmentInterface } from '~environments/environment.interface';

export const environment: EnvironmentInterface = {
  production: true,
  hyperlinks: {
    social: {
      facebook: 'https://www.facebook.com/james.spears.984',
      twitter: 'https://twitter.com/jameswspears',
      linkedIn: 'https://www.linkedin.com/in/james-spears-50834b8a/',
      github: 'https://github.com/jameOne'
    }
  },
  tileLayerEndpoints: {
    tileLayerURL: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Qpj0cSxqDgFSEcNanr1J',
    assetAttribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }
};
