export type TUserDAL = {
    _id: string;
    full_name: string;
    email: string;
};

export class UserDAL implements TUserDAL {
    _id: string;
    full_name: string;
    email: string;

    constructor(user: TUserDAL) {
        this._id = user._id;
        this.full_name = user.full_name;
        this.email = user.email;
    }
}
