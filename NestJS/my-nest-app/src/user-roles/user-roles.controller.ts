import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {
            message: 'Admin data',
        };
    }

    @Get('user-data')
    getUserData(){
        return {
            message: 'All persons are allowed to access this data',
        };
    }

    @Get('all-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin, Role.User)
    getAllData(){
        return {
            message: 'All data is not allowed',
        };
    }
}
