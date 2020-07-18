import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isDevMode } from '@angular/core';
import { AuthenticationFormService } from '../services/authentication-form/authentication-form.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationFormService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // // Add authorization header with jwt token if available.
    // const currentTokens = this.authService.currentTokensValue();
    // if (isDevMode()) {
    //   console.log(currentTokens);
    // }
    // if (currentTokens && currentTokens.access && currentTokens.refresh) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentTokens.access}`,
    //     }
    //   });
    //   if (isDevMode()) {
    //     console.log(request);
    //   }
    // }
    return next.handle(request);
  }
}
