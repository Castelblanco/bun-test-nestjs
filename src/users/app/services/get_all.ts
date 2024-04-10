import { TUserDOM } from 'src/users/domain/entities';
import { TDependencies } from '.';

export const buildGetAll = ({ repository }: TDependencies) => {
    const service = async (): Promise<TUserDOM[]> => {
        return await repository.getAll();
    };

    return service;
};
