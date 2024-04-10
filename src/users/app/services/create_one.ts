import { TUserDOM } from 'src/users/domain/entities';
import { TDependencies } from '.';

export const buildCreateOne = ({ repository }: TDependencies) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        return await repository.create(user);
    };

    return service;
};
