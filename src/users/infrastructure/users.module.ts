import { Module } from '@nestjs/common';
import { USERS_PROVEDRES } from '../app/services';
import { UsersMockRepository } from './storages/mock/implementations';
import { UsersControllers } from './controllers';
import { UserServices } from './services';

@Module({
    controllers: [UsersControllers],
    providers: [
        UserServices,
        {
            provide: USERS_PROVEDRES.MOCK_REPO,
            useClass: UsersMockRepository,
        },
    ],
})
export class UsersModule {}
