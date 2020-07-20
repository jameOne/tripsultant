import { Controller, Get } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {

  constructor(private readonly geocodingService: GeocodingService) {
  }

  @Get('test')
  test() {
    return this.geocodingService.test();
  }
}
