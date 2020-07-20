import { Test, TestingModule } from '@nestjs/testing';
import { DirectionsController } from './directions.controller';
import { DirectionsService } from './directions.service';
import { AppController } from '../app/app.controller';

describe('Directions Controller', () => {
  let controller: DirectionsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [DirectionsController],
      providers: [DirectionsService]
    }).compile();

    controller = module.get<DirectionsController>(DirectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('test', () => {
    it('should return "/api/v1/directions/test works!"', () => {
      expect(controller.test()).toEqual({
        message: '/api/v1/directions/test works!',
      });
    });
  });
});
