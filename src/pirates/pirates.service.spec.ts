import { Test, TestingModule } from '@nestjs/testing';
import { PiratesService } from './pirates.service';

describe('PiratesService', () => {
  let service: PiratesService;

  const mockPirateModel = {
    find: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PiratesService,
        {
          provide: 'PIRATE_MODEL',
          useValue: mockPirateModel,
        },
      ],
    }).compile();

    service = module.get<PiratesService>(PiratesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
