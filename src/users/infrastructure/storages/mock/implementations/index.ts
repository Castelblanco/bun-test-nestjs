import { TUserDOM } from 'src/users/domain/entities';
import { TUserRepository } from 'src/users/domain/repository';
import { TUserDAL } from '../models';
import { UserWrappers } from '../wrappers';
import { StorageError } from 'src/common/dto/errors/storage_error';

export class UsersMockRepository implements TUserRepository {
    users: TUserDAL[];
    wrappers: UserWrappers;

    constructor() {
        this.users = [];
        this.wrappers = new UserWrappers();
    }

    create = async (user: TUserDOM): Promise<TUserDOM> => {
        try {
            const index = this.users.push(this.wrappers.domToDal(user));
            return this.wrappers.dalToDom(this.users[index - 1]);
        } catch (e) {
            throw new StorageError(e);
        }
    };

    getAll = async (): Promise<TUserDOM[]> => {
        try {
            return this.users.map(this.wrappers.dalToDom);
        } catch (e) {
            throw new StorageError(e);
        }
    };
}
