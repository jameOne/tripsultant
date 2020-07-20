import { Test, TestingModule } from '@nestjs/testing';
import { GeocodingController } from './geocoding.controller';
import { GeocodingService } from './geocoding.service';
import { DirectionsController } from '../directions/directions.controller';

describe('Geocoding Controller', () => {
  let controller: GeocodingController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [GeocodingController],
      providers: [GeocodingService]
    }).compile();

    controller = module.get<GeocodingController>(GeocodingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('test', () => {
    it('should return "/api/v1/geocoding/test works!"', () => {
      expect(controller.test()).toEqual({
        message: '/api/v1/geocoding/test works!',
      });
    });
  });
});
