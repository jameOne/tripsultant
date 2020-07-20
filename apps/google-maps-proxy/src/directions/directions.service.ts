import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectionsService {
  test(): { message: string } {
    return { message: '/api/v1/directions/test works!' }
  }
}
