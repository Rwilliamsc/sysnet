import { INestApplication, Injectable, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  async onModuleDestroy() {
    await this.$disconnect()
  }

  // futuro gancho de desligamento para uso específico,
  async enableShutdownHooks(app: INestApplication) {
    // futuro code para habilitar ganchos de desligamento, se necessário.
  }
}
