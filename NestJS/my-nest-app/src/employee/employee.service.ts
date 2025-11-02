import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    @Get()
    getAllEmployees(){
        return 'All Employees get Request!!';
    }
}
