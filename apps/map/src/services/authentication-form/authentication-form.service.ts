import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials, Tokens, IdToken, ProfileInfo } from '~models/authentication-form/authentication-form';
import { EndpointDirectoryService } from '../endpoint-directory/endpoint-directory.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFormService {

  private currentTokensSubject: BehaviorSubject<Tokens>;
  public currentTokens: Observable<Tokens>;

  private currentProfileSubject: BehaviorSubject<ProfileInfo>;
  public currentProfile: Observable<ProfileInfo>;

  constructor(
    private http: HttpClient,
    private endpointDirectoryService: EndpointDirectoryService
  ) {
    this.currentTokensSubject = new BehaviorSubject<Tokens>(
      JSON.parse(localStorage.getItem('currentTokens')));
    this.currentTokens = this.currentTokensSubject.asObservable();

    this.currentProfileSubject = new BehaviorSubject<ProfileInfo>(
      JSON.parse(localStorage.getItem('currentProfile')));
    this.currentProfile = this.currentProfileSubject.asObservable();
  }

  public currentTokensValue(): Tokens {
    return this.currentTokensSubject.value;
  }

  public currentProfileValue(): ProfileInfo {
    return this.currentProfileSubject.value;
  }

  loginUser(username: string, password: string) {
    return this.http.post<any>(
      this.endpointDirectoryService.getLoginTokenEndpoint().url,
      new Credentials(username, password),
      this.endpointDirectoryService.getLoginTokenEndpoint().httpOptions
    ).pipe(map(response => {
      // login successful if there's a jwt token
      // in the response
      if (response.access && response.refresh) {
        // store Tokens details and jwt token
        // in local storage to keep Tokens logged
        // in between page refreshes
        localStorage.setItem(
          'currentTokens',
          JSON.stringify(response)
        );
        this.currentTokensSubject.next(response);
      }
      return response;
    }));
  }

  exchangeToken(idToken: string, email: string) {
    return this.http.post<any>(
      this.endpointDirectoryService.getTokenExchangeEndpoint().url,
      new IdToken(idToken, email),
      this.endpointDirectoryService.getTokenExchangeEndpoint().httpOptions
    ).pipe(map(response => {
      // login successful if there's a jwt token
      // in the response
      if (response.access) {
        // store Tokens details and jwt token
        // in local storage to keep Tokens logged
        // in between page refreshes
        localStorage.setItem(
          'currentTokens',
          JSON.stringify(response)
        );
        this.currentTokensSubject.next(response);
      }
      return response;
    }));
  }

  storeGoogleProfile(
    id: string,
    fullName: string,
    givenName: string,
    familyName: string,
    imageURL: string,
    email: string
  ) {
    const info = new ProfileInfo(
      id, fullName, givenName, familyName, imageURL, email
    );
    localStorage.setItem(
      'currentProfile',
      JSON.stringify(info)
    );
  }

  logoutUser() {
    // remove Tokens from local storage to log Tokens out
    localStorage.removeItem('currentTokens');
    this.currentTokensSubject.next(null);
    localStorage.removeItem('currentProfile');
    this.currentProfileSubject.next(null);
  }

}
