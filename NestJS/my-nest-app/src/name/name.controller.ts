import { Body, Controller, Post, Get } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { LowercasePipe } from 'src/common/pipes/lowercase/lowercase.pipe';

@Controller('name')
export class NameController {

    @Get()
    getName(){
        return 'Name get Request!!';
    }

    @Post('uppercase')
    nameToUpperCase(@Body('name', new UppercasePipe()) name: string){
        return { message: `Your name: ${name}`};
    }

    @Post('lowercase')
    nameToLowerCase(@Body('name', new LowercasePipe()) name: string){
        return { message: `Your name: ${name}`};
    }
}
