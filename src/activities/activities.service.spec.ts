import { Test, TestingModule } from '@nestjs/testing'
import { ActivitiesService } from './activities.service'

describe('ActivitiesService', () => {
  let service: ActivitiesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitiesService],
    }).compile()

    service = module.get<ActivitiesService>(ActivitiesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should add a new activity and return it', async () => {
    const newActivity = {
      name: 'Hiking',
      description: 'Mountain hiking adventure',
    }
    const expectedActivity = { ...newActivity, id: expect.any(Number) }
  })
})
