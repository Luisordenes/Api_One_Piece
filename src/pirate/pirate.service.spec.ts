import { Test, TestingModule } from '@nestjs/testing';
import { PirateService } from './pirate.service';

describe('PirateService', () => {
  let service: PirateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PirateService],
    }).compile();

    service = module.get<PirateService>(PirateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
