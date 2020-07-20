import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {

  constructor(private http: HttpService) {
  }

  autocomplete(): void {

  }

  test(): { message: string } {
    return { message: '/api/v1/places/test works!' }
  }
}
