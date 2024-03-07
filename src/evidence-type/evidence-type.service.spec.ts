import { Test, TestingModule } from '@nestjs/testing';
import { EvidenceTypeService } from './evidence-type.service';

describe('EvidenceTypeService', () => {
  let service: EvidenceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvidenceTypeService],
    }).compile();

    service = module.get<EvidenceTypeService>(EvidenceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
