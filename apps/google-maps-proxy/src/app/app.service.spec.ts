import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test', () => {
    it('should return "/api/v1/test works!"', () => {
      expect(service.test()).toEqual({
        message: '/api/v1/test works!',
      });
    });
  });
});
