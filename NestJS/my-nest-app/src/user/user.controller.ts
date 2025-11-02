import { Controller, Get } from '@nestjs/common';

@Controller('user') //decorators
export class UserController {
    @Get()
    getUser(){
        return 'User get Request!!';
    }
}
