import { Test, TestingModule } from '@nestjs/testing';
import { EvidenceTypeController } from './evidence-type.controller';
import { EvidenceTypeService } from './evidence-type.service';

describe('EvidenceTypeController', () => {
  let controller: EvidenceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvidenceTypeController],
      providers: [EvidenceTypeService],
    }).compile();

    controller = module.get<EvidenceTypeController>(EvidenceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
