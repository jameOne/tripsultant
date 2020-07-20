import { Test, TestingModule } from '@nestjs/testing';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

describe('Places Controller', () => {
  let controller: PlacesController;
  let module: TestingModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesController],
      providers: [PlacesService]
    }).compile();

    controller = module.get<PlacesController>(PlacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('test', () => {
    it('should return "/api/v1/places/test works!"', () => {
      expect(controller.test()).toEqual({
        message: '/api/v1/places/test works!',
      });
    });
  });
});
