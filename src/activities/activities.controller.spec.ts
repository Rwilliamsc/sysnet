import { Test, TestingModule } from '@nestjs/testing'
import { ActivitiesController } from './activities.controller'
import { ActivitiesService } from './activities.service'

describe('ActivitiesController', () => {
  let controller: ActivitiesController
  let service: ActivitiesService

  beforeEach(async () => {
    // Mock do ActivitiesService
    const mockActivitiesService = {
      findAll: jest.fn().mockImplementation(() => [
        { id: 1, name: 'Activity One' },
        { id: 2, name: 'Activity Two' },
      ]),
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitiesController],
      providers: [
        {
          provide: ActivitiesService,
          useValue: mockActivitiesService,
        },
      ],
    }).compile()

    controller = module.get<ActivitiesController>(ActivitiesController)
    service = module.get<ActivitiesService>(ActivitiesService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return an array of activities', async () => {
    // Chamada do método que queremos testar
    const result = await controller.findAll()
    // Verifica se o resultado é o esperado
    expect(result).toEqual([
      { id: 1, name: 'Activity One' },
      { id: 2, name: 'Activity Two' },
    ])
    // Verifica se o serviço foi chamado corretamente
    expect(service.findAll).toHaveBeenCalled()
  })
})
