import { TUserDOM } from '../entities';

export type TUserRepository = {
    create: (user: TUserDOM) => Promise<TUserDOM>;
    getAll: () => Promise<TUserDOM[]>;
};
