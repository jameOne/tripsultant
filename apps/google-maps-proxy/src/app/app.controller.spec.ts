import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectionsController } from '../directions/directions.controller';

describe('AppController', () => {
  let controller: AppController;
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  describe('test', () => {
    it('should return "/api/v1/test works!"', () => {
      expect(controller.test()).toEqual({
        message: '/api/v1/test works!',
      });
    });
  });
});
