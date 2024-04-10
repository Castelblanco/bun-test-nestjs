import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserMappers } from 'src/users/app/mappers';
import { TUserAPI } from 'src/users/domain/dto';
import { UserServices } from '../services';

@Controller('users')
export class UsersControllers {
    mappers: UserMappers;

    constructor(private readonly services: UserServices) {
        this.mappers = new UserMappers();
    }

    @Get('')
    async getAll(): Promise<TUserAPI[]> {
        try {
            const users = await this.services.getAll();
            return users.map(this.mappers.domToApi);
        } catch (e) {
            return e;
        }
    }

    @Post('')
    async create(@Body() body: TUserAPI): Promise<TUserAPI> {
        try {
            const user = await this.services.create(
                this.mappers.apiToDom(body)
            );
            return this.mappers.domToApi(user);
        } catch (e) {
            return e;
        }
    }
}
