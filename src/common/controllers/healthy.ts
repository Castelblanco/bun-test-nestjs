import { HttpSuccessCode } from '../dto/enums/success_enum';
import { ApiReponse } from '../dto/responses/api_responses';
import { version, name } from '../../../package.json';
import { Controller, Get } from '@nestjs/common';

const svc = process.env.APP_ID || 'Service';
const env = process.env.NODE_ENV || 'development';

export interface IHealthy {
    message: string;
    name: string;
    environment: string;
    version: string;
}

const healthy: IHealthy = {
    message: `${svc} OK 👽`,
    environment: env,
    version: version,
    name,
};

@Controller()
export class HealthyController {
    @Get('')
    get() {
        return new ApiReponse<IHealthy>(healthy, HttpSuccessCode.SUCCESSFUL);
    }

    @Get('/readiness')
    readiness() {
        return new ApiReponse<IHealthy>(healthy, HttpSuccessCode.SUCCESSFUL);
    }

    @Get('/health')
    health() {
        return new ApiReponse<IHealthy>(healthy, HttpSuccessCode.SUCCESSFUL);
    }
}
