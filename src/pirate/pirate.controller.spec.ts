import { Test, TestingModule } from '@nestjs/testing';
import { PirateController } from './pirate.controller';
import { PirateService } from './pirate.service';

describe('PirateController', () => {
  let controller: PirateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PirateController],
      providers: [PirateService],
    }).compile();

    controller = module.get<PirateController>(PirateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
