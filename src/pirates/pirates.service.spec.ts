import { Test, TestingModule } from '@nestjs/testing';
import { PiratesService } from './pirates.service';

describe('PiratesService', () => {
  let service: PiratesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PiratesService],
    }).compile();

    service = module.get<PiratesService>(PiratesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
