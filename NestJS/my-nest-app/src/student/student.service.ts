import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {

    constructor(
        @InjectModel(Student.name) private readonly studentModel: Model<StudentDocument>
    ) {}

    async createStudent(data: Partial<Student>): Promise<Student>{
        const createdStudent = new this.studentModel(data);
        return createdStudent.save();
    }

    async getAllStudents(): Promise<Student[]>{
        return this.studentModel.find().exec();
    }

    async getStudentById(id: string): Promise<Student | null>{
        const student = await this.studentModel.findById(id).exec();
        if(!student){
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        return student;
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null>{
        const student = await this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
        if(!student){
            throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
        }
        return student;
    }

    // private students = [
    //     {
    //         id: 1,
    //         name: 'Student 1',
    //         age: 20,
    //     },
    //     {
    //         id: 2,
    //         name: 'Student 2',
    //         age: 21,
    //     },
    //     {
    //         id: 3,
    //         name: 'Student 3',
    //         age: 22,
    //     },
    // ];

    //Get
    // getAllStudents(){
    //     return this.students;
    // }

    // getStudentById(id: number){
    //     const student = this.students.find((student) => student.id === id);
    //     if(!student){
    //         throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    //     }
    //     return student;
    // }

    // //Post
    // createStudent(data: {name: string, age: number}){
    //     const student = {
    //         id: this.students.length + 1,
    //         ...data,
    //     };
    //     this.students.push(student);
    //     return student;
    // }

    // //Put
    // updateStudent(id: number, data: {name: string, age: number}){
    //     const index = this.students.findIndex((student) => student.id === id);
    //     if(index === -1){
    //         throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    //     }
    //     this.students[index] = {
    //         id,
    //         ...data,
    //     };
    //     return this.students[index];
    // }

    // //Patch
    // patchStudent(id: number, data: Partial<{name: string, age: number}>){
    //     const student = this.getStudentById(id);
    //     if(!student){
    //         throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    //     }
    //     Object.assign(student, data);   //only modify the fields that are provided
    //     return student;
    // }

    // //Delete
    // deleteStudent(id: number){
    //     const index = this.students.findIndex((student) => student.id === id);
    //     if(index === -1){
    //         throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    //     }
    //     // this.students = this.students.filter((student) => student.id !== id);
    //     const deletedStudent = this.students.splice(index, 1);  //remove the student from the array
    //     return {
    //         message: 'Student deleted successfully',
    //         student: deletedStudent,
    //     };
    // }
}
