import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data);
    }

    @Get()
    getAllStudents(){
        return this.studentService.getAllStudents();
    } 

    @Get(':id')
    getStudentById(@Param('id') id: string){
        return this.studentService.getStudentById(Number(id));
    }

    // @Post()
    // createStudent(@Body() data: {name: string, age: number}){
    //     return this.studentService.createStudent(data);
    // }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() data: {name: string, age: number}){
        return this.studentService.updateStudent(Number(id), data);
    }

    @Patch(':id')
    patchStudent(@Param('id') id: string, @Body() data: Partial<{name: string, age: number}>){
        return this.studentService.patchStudent(Number(id), data);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string){
        return this.studentService.deleteStudent(Number(id));
    }
}
