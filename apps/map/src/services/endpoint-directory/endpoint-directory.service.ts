import { Injectable, isDevMode } from '@angular/core';
import { Endpoint } from '~models/services/endpoint-directory/endpoint';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointDirectoryService {

  constructor() {
  }

  getLoginTokenEndpoint(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8000/api/v1/login/token/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://registrar.tripsultant.com/api/v1/token/exchange/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }

  getTokenExchangeEndpoint(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8000/api/v1/token/exchange/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://registrar.tripsultant.com/api/v1/token/exchange/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }

  getPlacesQueryAutocomplete(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8080/api/v1/places/query-autocomplete/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://google-maps-proxy-byawkcd4oa-uc.a.run.app/api/v1/places/query-autocomplete/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }

  getGeocodingGeocoder(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8080/api/v1/geocoding/geocoder/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://google-maps-proxy-byawkcd4oa-uc.a.run.app/api/v1/geocoding/geocoder/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }

  getDistanceMatrix(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8080/api/v1/distance/matrix/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://google-maps-proxy-byawkcd4oa-uc.a.run.app/api/v1/distance/matrix/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }

  getDirections(): Endpoint {
    let url: string;
    let httpOptions: { headers: HttpHeaders };
    if (isDevMode()) {
      url = 'http://127.0.0.1:8080/api/v1/directions/route/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    } else {
      url = 'https://google-maps-proxy-byawkcd4oa-uc.a.run.app/api/v1/directions/route/';
      httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      };
    }
    return new Endpoint(url, httpOptions);
  }
}
