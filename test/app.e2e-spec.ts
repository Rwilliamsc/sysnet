import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesController } from './../src/activities/activities.controller';
import { ActivitiesService } from './../src/activities/activities.service';

describe('ActivitiesController', () => {
  let controller: ActivitiesController;
  let service: ActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitiesController],
      providers: [
        {
          provide: ActivitiesService,
          useValue: {
            addActivity: jest.fn().mockResolvedValue('Activity Added'),
          },
        },
      ],
    }).compile();

    controller = module.get<ActivitiesController>(ActivitiesController);
    service = module.get<ActivitiesService>(ActivitiesService);
  });
});
