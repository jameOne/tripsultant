import { Injectable } from '@nestjs/common';

@Injectable()
export class GeocodingService {
  test(): { message: string } {
    return { message: '/api/v1/geocoding/test works!' }
  }
}
