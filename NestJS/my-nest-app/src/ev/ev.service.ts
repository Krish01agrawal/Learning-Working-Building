import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class EvService {
    constructor(private readonly ConfigService: ConfigService){};

    getDbUrl(){
        const dbUrl = this.ConfigService.get<string>('DATABASE_URL');
        console.log('DB_URL: ', dbUrl);
        return dbUrl;
    }
}
