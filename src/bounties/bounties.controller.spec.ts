import { Test, TestingModule } from '@nestjs/testing';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';

describe('BountiesController', () => {
  let controller: BountiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BountiesController],
      providers: [BountiesService],
    }).compile();

    controller = module.get<BountiesController>(BountiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
