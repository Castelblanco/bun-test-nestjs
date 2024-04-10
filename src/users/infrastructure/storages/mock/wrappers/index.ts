import { TMappers, TWrappers } from 'src/common/base/mapper_wrappers';
import { TUserAPI, UserAPI } from 'src/users/domain/dto';
import { TUserDOM, UserDOM } from 'src/users/domain/entities';

export class UserWrappers implements TWrappers<TUserDOM, TUserAPI> {
    dalToDom = (item: TUserAPI): TUserDOM => {
        return new UserDOM({
            id: item._id,
            fullName: item.full_name,
            email: item.email,
        });
    };

    domToDal = (item: TUserDOM): TUserAPI => {
        return new UserAPI({
            _id: item.id,
            full_name: item.fullName,
            email: item.email,
        });
    };
}
