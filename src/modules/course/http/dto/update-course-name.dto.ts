import { Transform } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateCourseNameDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    workload: number

    @IsDate()
    @Transform(({ value }) => new Date(value))
    startDate: Date
}