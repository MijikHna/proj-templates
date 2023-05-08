import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World" 1', () => {
      appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World');
    });
    it('should return Hello World 2', () => {
      appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World');
    });
  });
});
