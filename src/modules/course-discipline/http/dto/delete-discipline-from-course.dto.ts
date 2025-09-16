import { IsNotEmpty, IsString } from "class-validator";

export class DeleteDisciplineFromCourseDto {
    @IsString()
    @IsNotEmpty()
    course: string

    @IsString()
    @IsNotEmpty()
    discipline: string
}