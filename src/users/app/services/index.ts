import { TUserRepository } from 'src/users/domain/repository';
export { buildCreateOne } from './create_one';
export { buildGetAll } from './get_all';

export type TDependencies = {
    repository: TUserRepository;
};

export const enum USERS_PROVEDRES {
    MOCK_REPO = 'mock:repo',
}
