import { HttpHeaders } from '@angular/common/http';

export class Endpoint {
  url: string;
  httpOptions: { headers: HttpHeaders };

  constructor(
    url: string,
    httpOptions: { headers: HttpHeaders }
  ) {
    this.url = url;
    this.httpOptions = httpOptions;
  }
}
