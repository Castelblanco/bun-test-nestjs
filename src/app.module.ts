import { Module } from '@nestjs/common';
import { HealthyController } from './common/controllers/healthy';
import { UsersModule } from './users/infrastructure/users.module';

@Module({
    imports: [UsersModule],
    controllers: [HealthyController],
})
export class AppModule {}
