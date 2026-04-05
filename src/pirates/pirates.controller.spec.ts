import { Test, TestingModule } from '@nestjs/testing';
import { PiratesController } from './pirates.controller';
import { PiratesService } from './pirates.service';

describe('PiratesController', () => {
  let controller: PiratesController;

  const mockPiratesService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiratesController],
      providers: [
        {
          provide: PiratesService,
          useValue: mockPiratesService,
        },
      ],
    }).compile();
    controller = module.get<PiratesController>(PiratesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
