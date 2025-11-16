import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';
import { ParseIntPipe } from '@nestjs/common';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number){
        return `Hello ${id}`;
    }
}
