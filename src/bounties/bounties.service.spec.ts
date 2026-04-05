import { Test, TestingModule } from '@nestjs/testing';
import { BountiesService } from './bounties.service';
import { NotFoundException } from '@nestjs/common';

describe('BountiesService', () => {
  let service: BountiesService;

  const mockBountyModel = {
    find: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BountiesService,
        {
          provide: 'BOUNTY_MODEL',
          useValue: mockBountyModel,
        },
      ],
    }).compile();

    service = module.get<BountiesService>(BountiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array of bounties', async () => {
    const mockData = [
      { cantidadBellys: 1000, estado: 'Wanted' },
      { cantidadBellys: 2000, estado: 'Captured' },
    ];

    mockBountyModel.find.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockData),
    });

    const result = await service.findAll();

    expect(result).toEqual(mockData);
    expect(mockBountyModel.find).toHaveBeenCalled();
  });

  it('findOne should throw NotFoundException if not found', async () => {
    mockBountyModel.findById.mockReturnValue({
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(null),
    });

    await expect(service.findOne('123')).rejects.toThrow(NotFoundException);
  });
});
