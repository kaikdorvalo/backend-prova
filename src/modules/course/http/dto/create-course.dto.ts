import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    workload: number

    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    startDate: Date
}