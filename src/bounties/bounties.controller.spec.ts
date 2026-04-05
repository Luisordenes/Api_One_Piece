import { Test, TestingModule } from '@nestjs/testing';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';

describe('BountiesController', () => {
  let controller: BountiesController;

  const mockBountiesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BountiesController],
      providers: [
        {
          provide: BountiesService,
          useValue: mockBountiesService,
        },
      ],
    }).compile();
    controller = module.get<BountiesController>(BountiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
