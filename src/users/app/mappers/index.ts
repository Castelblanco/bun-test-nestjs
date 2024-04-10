import { TMappers } from 'src/common/base/mapper_wrappers';
import { TUserAPI, UserAPI } from 'src/users/domain/dto';
import { TUserDOM, UserDOM } from 'src/users/domain/entities';

export class UserMappers implements TMappers<TUserDOM, TUserAPI> {
    apiToDom = (item: TUserAPI): TUserDOM => {
        return new UserDOM({
            id: item._id,
            fullName: item.full_name,
            email: item.email,
        });
    };

    domToApi = (item: TUserDOM): TUserAPI => {
        return new UserAPI({
            _id: item.id,
            full_name: item.fullName,
            email: item.email,
        });
    };
}
