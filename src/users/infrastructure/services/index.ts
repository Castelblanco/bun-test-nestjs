import { Inject, Injectable } from '@nestjs/common';
import {
    TDependencies,
    USERS_PROVEDRES,
    buildCreateOne,
    buildGetAll,
} from 'src/users/app/services';
import { TUserDOM } from 'src/users/domain/entities';
import { TUserRepository } from 'src/users/domain/repository';

@Injectable()
export class UserServices {
    create: (user: TUserDOM) => Promise<TUserDOM>;
    getAll: () => Promise<TUserDOM[]>;

    constructor(
        @Inject(USERS_PROVEDRES.MOCK_REPO)
        private readonly repository: TUserRepository
    ) {
        const dependencies: TDependencies = {
            repository,
        };

        this.create = buildCreateOne(dependencies);
        this.getAll = buildGetAll(dependencies);
    }
}
