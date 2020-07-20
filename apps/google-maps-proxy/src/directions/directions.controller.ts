import { Controller, Get } from '@nestjs/common';

import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {

  constructor(private readonly directionsService: DirectionsService) {
  }

  @Get('test')
  test() {
    return this.directionsService.test();
  }
}
