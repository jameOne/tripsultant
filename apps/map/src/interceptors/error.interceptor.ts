import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationFormService } from '../services/authentication-form/authentication-form.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authenticationFormService: AuthenticationFormService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request).pipe(catchError(err => {
    //   if (err.status === 401) {
    //     // auto logout if 401 response returned from api
    //     // unless the requested end points are returned
    //     // 401 unauthorized the user will be able to view
    //     // the requested page
    //     this.authenticationFormService.logout();
    //     this.router.navigate(['ui/auth']).then();
    //     const error = err.error.message || err.statusText;
    //     return throwError(error);
    //   } else if (err.status !== 200) {
    //     const error = err.error;
    //     return throwError(error);
    //   }
    // }));
    return next.handle(request);
  }

}
