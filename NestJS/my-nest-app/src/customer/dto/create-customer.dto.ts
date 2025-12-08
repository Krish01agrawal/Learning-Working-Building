import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    age: number;
}